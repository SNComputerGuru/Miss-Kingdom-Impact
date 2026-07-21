import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/votecheckout.css";
import VotingBankingDetails from "./VotingBankingDetails";

const finalists = [
    { id: "queen-01", name: "Zinhle", code: "MKI07", image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ZINHLE%20MKI07.png" },
    { id: "queen-02", name: "Olive", code: "MKI04", image: "https://ik.imagekit.io/yq17ihow7e/Finalists/OLIVE%20MKI04.png" },
    { id: "queen-03", name: "Abigail", code: "MKI01", image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ABIGAIL%20MKI01_.png" },
    { id: "queen-04", name: "Asante", code: "MKI02", image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ASANTE%20MKI02_.png" },
    { id: "queen-05", name: "Shudufhadzo", code: "MKI05", image: "https://ik.imagekit.io/yq17ihow7e/Finalists/SHUDUFHADZO%20MKI05.png" },
    { id: "queen-06", name: "Athandile", code: "MKI03", image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ATHANDILE%20MKI03.png" },
    { id: "queen-07", name: "Thato", code: "MKI06", image: "https://ik.imagekit.io/yq17ihow7e/Finalists/THATO%20MKI06.png" }
];

const packages = [
    { amount: "R50", label: "25 votes" },
    { amount: "R100", label: "50 votes" },
    { amount: "R150", label: "75 votes" },
    { amount: "R200", label: "100 votes + 25 bonus votes" },
    { amount: "R300", label: "150 votes + 50 bonus votes" },
    { amount: "R400", label: "200 votes + 75 bonus votes" },
    { amount: "R500", label: "250 votes + 100 bonus votes" },
    { amount: "R1000", label: "500 votes + 250 bonus votes" }
];

export default function VoteCheckout() {

    const { contestantId } = useParams();

    const finalist = useMemo(() => {
        return finalists.find((item) => item.id === contestantId);
    }, [contestantId]);

    const [selectedPackage, setSelectedPackage] = useState(packages[0]);
    const [paymentMethod, setPaymentMethod] = useState("online");
    const [loading, setLoading] = useState(false);

    if (!finalist) {
        return (
            <section className="voteCheckoutPage">
                <h1>Finalist Not Found</h1>
            </section>
        );
    }

    const handlePayFastCheckout = async () => {
        try {
            setLoading(true);

            const res = await fetch("http://127.0.0.1:8788/api/payfast-init", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: selectedPackage.amount.replace("R", ""),
                    itemName: `Voting Package - ${finalist.name}`,
                    reference: finalist.code,
                    secondaryReference: finalist.name
                })
            });

            const html = await res.text();

            const win = window.open("", "_blank");

            win.document.open();
            win.document.write(html);
            win.document.close();

        } catch (error) {
            console.error("Payment error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="voteCheckoutPage">
            <div className="voteCheckoutCard">

                <div className="voteCheckoutLeft">
                    <div className="voteCheckoutImage">
                        <img src={finalist.image} alt={finalist.name} />
                    </div>
                </div>

                <div className="voteCheckoutRight">

                    <p className="voteCheckoutEyebrow">Voting Checkout</p>

                    <h1>{finalist.name}</h1>

                    <div className="voteInfoBlock">
                        <span>Voting Code</span>
                        <strong>{finalist.code}</strong>
                    </div>

                    <div className="voteField">
                        <label>Select Voting Package</label>

                        <select
                            value={selectedPackage.amount}
                            onChange={(e) => {
                                const selected = packages.find(
                                    (p) => p.amount === e.target.value
                                );
                                if (selected) setSelectedPackage(selected);
                            }}
                        >
                            {packages.map((item) => (
                                <option key={item.amount} value={item.amount}>
                                    {item.amount} — {item.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="voteSummary">
                        <p>
                            <span>Selected</span>
                            <strong>{selectedPackage.amount}</strong>
                        </p>
                        <p>
                            <span>Votes</span>
                            <strong>{selectedPackage.label}</strong>
                        </p>
                    </div>

                    <div className="paymentMethods">

                        <button
                            className={paymentMethod === "online" ? "paymentActive" : ""}
                            onClick={() => setPaymentMethod("online")}
                        >
                            Online Payment
                        </button>

                        <button
                            className={paymentMethod === "bank" ? "paymentActive" : ""}
                            onClick={() => setPaymentMethod("bank")}
                        >
                            Bank Transfer
                        </button>

                    </div>

                    {paymentMethod === "online" && (
                        <div className="paymentPanel">

                            <p>Continue to secure payment.</p>

                            <button
                                className="paymentButton"
                                onClick={handlePayFastCheckout}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Pay Now"}
                            </button>

                        </div>
                    )}

                    {paymentMethod === "bank" && (
                        <div className="paymentPanel">
                            <VotingBankingDetails finalistCode={finalist.code} />
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}