import React from "react";
import "../styles/journey.css";

export default function Journey() {
    const journeySteps = [
        {
            title: "Auditions",
            content: "Online auditions for a month."
        },
        {
            title: "Welcoming Sash Ceremony",
            content: "The Miss Kingdom Impact welcoming sash ceremony is a sacred commissioning moment that officially welcomes and recognises the selected participants as ambassadors of Miss Kingdom Impact."
        },
        {
            title: "Participants' Voting Process",
            content: "Supporters cast votes for their favourite contestant through the approved voting system within the stipulated voting period."
        },
        {
            title: "Online Bootcamp",
            content: "Virtual training designed to equip Miss Kingdom Impact participants with foundational teachings and skills for personal growth, leadership, kingdom influence and faith." +
                " This includes interactive teachings and engagement sessions to promote active participation and growth."
        },
        {
            title: "Interviews",
            content: "The individual interview phase provides an opportunity for each Miss Kingdom Impact participant to engage in a one on one assessment with the judging panel. " +
                "Focus areas include communication skills, vision, mission, leadership skills, confidence, and alignment with kingdom value." +
                " Contestants share their purpose, impact initiatives, and personal journey."

        },
        {
            title: "Mentorship Program",
            // content: "This is an ongoing program that covers career development, leadership training, personal branding and influence coaching."
            content: "An ongoing training program focusing on career development, leadership training, personal branding and influence coaching. " +
                "Participants are provided with mentors and industry leaders. " +
                "Mentors provide guidance and practical insights for personal and professional advancement."
        },
        {
            title: "In-person Bootcamp",
            content: "Practical training phase that includes public speaking, stage present, runway walk and overall presentation." +
                " This includes exercises and rehersals in preparation for the finale."
        },
        {
            title: "Finale",
            content: "The Grand Finale celebrates excellence, purpose and the emergence of women prepared to lead, serve and create lasting kingdom impact in society. " +
                "The Miss Kingdom Impact title holders and ambassadors are officially crowned and commissioned."
        }
    ];

    return (
        <div className="journeyPage">
            <div className="ourJourney">
                <h2>The MISS KI Journey</h2>

                <p className="eventsNote">
                    Click card to read more...
                </p>
                <div className="journeyStack">
                    {journeySteps.map((step, index) => (
                        <div key={index} className="journeyCard">
                            <h3>{step.title}</h3>
                            <p className="journeyContent">{step.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}