import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/votecheckout.css";
import VotingBankingDetails from "./VotingBankingDetails";

const finalists = [
    {
        id: "queen-01",
        name: "Zinhle",
        code: "MKI07",
        image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ZINHLE%20MKI07.png"
    },
    {
        id: "queen-02",
        name: "Olive",
        code: "MKI04",
        image: "https://ik.imagekit.io/yq17ihow7e/Finalists/OLIVE%20MKI04.png"
    },
    {
        id: "queen-03",
        name: "Abigail",
        code: "MKI01",
        image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ABIGAIL%20MKI01_.png"
    },
    {
        id: "queen-04",
        name: "Asante",
        code: "MKI02",
        image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ASANTE%20MKI02_.png"
    },
    {
        id: "queen-05",
        name: "Shudufhadzo",
        code: "MKI05",
        image: "https://ik.imagekit.io/yq17ihow7e/Finalists/SHUDUFHADZO%20MKI05.png"
    },
    {
        id: "queen-06",
        name: "Athandile",
        code: "MKI03",
        image: "https://ik.imagekit.io/yq17ihow7e/Finalists/ATHANDILE%20MKI03.png"
    },
    {
        id: "queen-07",
        name: "Thato",
        code: "MKI06",
        image: "https://ik.imagekit.io/yq17ihow7e/Finalists/THATO%20MKI06.png"
    }
];
const packages = [
    {
        amount: "R50",
        label: "25 votes"
    },
    {
        amount: "R100",
        label: "50 votes"
    },
    {
        amount: "R150",
        label: "75 votes"
    },
    {
        amount: "R200",
        label: "100 votes + 25 bonus votes"
    },
    {
        amount: "R300",
        label: "150 votes + 50 bonus votes"
    },
    {
        amount: "R400",
        label: "200 votes + 75 bonus votes"
    },
    {
        amount: "R500",
        label: "250 votes + 100 bonus votes"
    },
    {
        amount: "R1000",
        label: "500 votes + 250 bonus votes"
    }
];

export default function VoteCheckout() {
    const { contestantId } = useParams();

    const finalist = useMemo(() => {
        return finalists.find((item) => item.id === contestantId);
    }, [contestantId]);

    const [selectedPackage, setSelectedPackage] = useState(packages[0]);
    const [paymentMethod, setPaymentMethod] = useState("online");

    if (!finalist) {
        return (
            <section className="voteCheckoutPage">
                <h1>Finalist Not Found</h1>
            </section>
        );
    }

    return (
        <section className="voteCheckoutPage">
            <div className="voteCheckoutCard">
                <div className="voteCheckoutLeft">
                    <div className="voteCheckoutImage">
                        <img
                            src={finalist.image}
                            alt={finalist.name}
                        />
                    </div>
                </div>

                <div className="voteCheckoutRight">
                    <p className="voteCheckoutEyebrow">
                        Voting Checkout
                    </p>

                    <h1>{finalist.name}</h1>

                    <div className="voteInfoBlock">
                        <span>Voting Code</span>
                        <strong>{finalist.code}</strong>
                    </div>

                    <div className="voteField">
                        <label>Click to Select Voting Package</label>

                        <select
                            value={selectedPackage.amount}
                            onChange={(event) => {
                                const selected = packages.find(
                                    (item) => item.amount === event.target.value
                                );

                                setSelectedPackage(selected);
                            }}
                        >
                            {packages.map((item) => (
                                <option
                                    value={item.amount}
                                    key={item.amount}
                                >
                                    {item.amount} — {item.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="voteSummary">
                        <p>
                            <span>Selected Package</span>
                            <strong>{selectedPackage.amount}</strong>
                        </p>

                        <p>
                            <span>Total Votes</span>
                            <strong>{selectedPackage.label}</strong>
                        </p>
                    </div>

                    <div className="paymentMethods">
                        <button
                            type="button"
                            className={paymentMethod === "online" ? "paymentActive" : ""}
                            onClick={() => setPaymentMethod("online")}
                        >
                            Online Payment
                        </button>

                        <button
                            type="button"
                            className={paymentMethod === "bank" ? "paymentActive" : ""}
                            onClick={() => setPaymentMethod("bank")}
                        >
                            Bank Transfer
                        </button>
                    </div>

                    {paymentMethod === "online" && (
                        <div className="paymentPanel">
                            <p>
                                Continue to secure online payment.
                            </p>

                            <button
                                className="paymentButton"
                                type="button"
                            >
                                Proceed To Payment
                            </button>
                        </div>
                    )}

                    {paymentMethod === "bank" && (
                        <div className="paymentPanel">
                            <VotingBankingDetails finalistCode={finalist.code} />
                        </div>
                    )
                    }
                </div>
            </div>
        </section>
    );
}