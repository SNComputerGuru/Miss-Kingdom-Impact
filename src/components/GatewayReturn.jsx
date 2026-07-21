import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../styles/gatewayreturn.css";

export default function GatewayReturn() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const status = params.get("status");

    useEffect(() => {
        if (!status) {
            navigate("/");
        }
    }, [status, navigate]);

    if (!status) return null;

    return (
        <section className="gatewayReturnPage">
            <div className={`gatewayCard ${status}`}>
                {status === "success" && (
                    <>
                        <h1>Payment Successful</h1>
                        <p>Your transaction has been completed successfully.</p>
                        <button onClick={() => navigate("/")}>
                            Return Home
                        </button>
                    </>
                )}

                {status === "cancelled" && (
                    <>
                        <h1>Payment Cancelled</h1>
                        <p>Your transaction was not completed.</p>
                        <button onClick={() => navigate("/")}>
                            Try Again
                        </button>
                    </>
                )}

                {status === "notify" && (
                    <>
                        <h1>Processing Payment</h1>
                        <p>Your payment is being confirmed.</p>
                        <button onClick={() => navigate("/")}>
                            Return Home
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}