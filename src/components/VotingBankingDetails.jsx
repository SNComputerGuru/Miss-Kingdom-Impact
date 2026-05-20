export default function VotingBankingDetails({ finalistCode }) {
    return (
        <section className="bankingDetailsSection">
            <div className="bankingDetailsCard">
                <h2>VOTING PAYMENT DETAILS</h2>

                <div className="bankingInfo">
                    <p>
                        <strong>Bank:</strong> BankName
                    </p>

                    <p>
                        <strong>Account Holder:</strong> MISS KINGDOM IMPACT NPC
                    </p>

                    <p>
                        <strong>Account Number:</strong> 45668618
                    </p>

                    <p>
                        <strong>Branch Code:</strong> 84891681
                    </p>

                    <p>
                        <strong>Reference:</strong> {finalistCode}
                    </p>
                </div>
            </div>
        </section>
    );
}