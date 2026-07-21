export async function onRequestPost(context) {
    try {
        const formData = await context.request.formData();

        const data = Object.fromEntries(formData.entries());

        const webhookUrl = context.env.DISCORD_WEBHOOK_URL;

        const fields = Object.entries(data).map(([key, value]) => ({
            name: key,
            value: String(value || "N/A").slice(0, 1024),
            inline: true
        }));

        const payload = {
            content: "PayFast Webhook Event Received",
            embeds: [
                {
                    title: "Full PayFast Payload",
                    color: 0xd4af37,
                    fields,
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: "Miss Kingdom Impact Payment Gateway"
                    }
                }
            ]
        };

        await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        return new Response("OK", { status: 200 });

    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
}