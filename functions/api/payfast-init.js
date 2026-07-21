function buildParamString(data) {
    return Object.keys(data)
        .sort()
        .map((key) => {
            const val = data[key];
            if (val === undefined || val === null || val === "") return "";
            return `${key}=${encodeURIComponent(String(val).trim())}`;
        })
        .filter(Boolean)
        .join("&");
}

async function generateSignature(data, passphrase) {
    const encoder = new TextEncoder();

    const stringToSign = passphrase
        ? `${buildParamString(data)}&passphrase=${encodeURIComponent(passphrase)}`
        : buildParamString(data);

    const key = await crypto.subtle.importKey(
        "raw",
        encoder.encode(passphrase || ""),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );

    const signature = await crypto.subtle.sign(
        "HMAC",
        key,
        encoder.encode(stringToSign)
    );

    return [...new Uint8Array(signature)]
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

function cors() {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    };
}

export async function onRequest(context) {
    const { request, env } = context;

    if (request.method === "OPTIONS") {
        return new Response(null, { headers: cors() });
    }

    if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: cors() });
    }

    try {
        const body = await request.json();

        const payload = {
            merchant_id: env.PAYFAST_MERCHANT_ID,
            merchant_key: env.PAYFAST_MERCHANT_KEY,
            amount: Number(body.amount).toFixed(2),
            item_name: body.itemName || "Payment",
            custom_str1: body.reference || "",
            custom_str2: body.secondaryReference || "",
            return_url: "https://misskingdomimpact.com/gateway-return?status=success",
            cancel_url: "https://misskingdomimpact.com/gateway-return?status=cancelled",
            notify_url: "https://misskingdomimpact.com/api/payfast-webhook"
        };

        payload.signature = await generateSignature(payload, env.PAYFAST_PASSPHRASE);

        const formInputs = Object.entries(payload)
            .map(([key, value]) => {
                return `<input type="hidden" name="${key}" value="${value}" />`;
            })
            .join("\n");

        const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Redirecting...</title>
</head>
<body>
    <form id="payfastForm" method="POST" action="https://www.payfast.co.za/eng/process">
        ${formInputs}
    </form>

    <script>
        document.getElementById("payfastForm").submit();
    </script>
</body>
</html>
        `;

        return new Response(html, {
            headers: {
                "Content-Type": "text/html",
                ...cors()
            }
        });

    } catch (err) {
        return new Response("Payment init failed: " + err.message, {
            status: 500,
            headers: cors()
        });
    }
}