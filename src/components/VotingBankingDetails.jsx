export default function VotingBankingDetails({ finalistCode }) {
    return (
        <section className="bankingDetailsSection">
            <div className="bankingDetailsCard">
                <h2>VOTING PAYMENT DETAILS</h2>

                <div className="bankingInfo">
                    <p>
                        <strong>Bank:</strong> FNB
                    </p>

                    <p>
                        <strong>Account Holder:</strong> MISS KINGDOM IMPACT NPC
                    </p>

                    <p>
                        <strong>Account Number:</strong> 63205389017
                    </p>

                    <p>
                        <strong>Branch Code:</strong> 251905
                    </p>

                    <p>
                        <strong>Reference:</strong> {finalistCode}
                    </p>
                </div>
            </div>
        </section>
    );
}