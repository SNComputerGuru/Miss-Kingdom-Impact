import React from "react";
import "../styles/bankingdetails.css";

export default function BankingDetails() {
    return (
        <section className="bankingDetailsSection">
            <div className="bankingDetailsCard">
                <h2>BANKING DETAILS</h2>

                <p className="bankingIntro">
                    Payments must be made to the bank account details listed below.
                </p>

                <div className="bankingInfo">
                    <p><strong>Bank:</strong> FNB</p>
                    <p><strong>Holder:</strong> MISS KINGDOM IMPACT NPO</p>
                    <p><strong>Account No.:</strong> 63205389017</p>
                    <p><strong>Branch Code:</strong> 251905</p>
                    {/*<p><strong>Reference:</strong> Initials, Surname (Example – AB Joe)</p>*/}
                </div>

                <div className="donationBlock">
                    <h3>PLEDGE MONETARY DONATION</h3>

                    <p>
                        Your donation will go a long way in helping us to create programs
                        that promote the personal growth and development of our contestants together with the community outreaches that we do.
                    </p>
                </div>
            </div>
        </section>
    );
}