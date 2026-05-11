import { useState } from "react";
import "../styles/outreaches.css";

import foodDriveOne from "../assets/outreaches/food-drive-1.jpeg";
import foodDriveTwo from "../assets/outreaches/food-drive-2.jpeg";
import foodDriveThree from "../assets/outreaches/food-drive-3.jpeg";
import foodDriveFour from "../assets/outreaches/food-drive-4.jpeg";
import foodDriveFive from "../assets/outreaches/food-drive-5.jpeg";
import foodDriveSix from "../assets/outreaches/food-drive-6.jpeg";
import foodDriveSeven from "../assets/outreaches/food-drive-7.jpeg";
import foodDriveEight from "../assets/outreaches/food-drive-8.jpeg";

export default function Outreaches() {
    const [openCard, setOpenCard] = useState(null);

    const outreaches = [
        {
            title: "Food Drive",
            date: "16 Dec 2025",
            summary:
                "A Kingdom impact outreach dedicated to serving individuals through food support, compassion, and community care.",
            content: (
                <>
                    <p>
                        The Food Drive was one of the first outreach initiatives by Miss Kingdom Impact,
                        created to extend love, dignity, and practical support to members of the community.
                    </p>

                    <p>
                        Through this initiative, the brand demonstrated that pageantry is not only about
                        elegance and crowns, but also about service, generosity, and meaningful impact.
                    </p>

                    <p>
                        The outreach focused on sharing food items with those in need, while creating a
                        moment of care, hope, and encouragement for families during the festive season.
                    </p>
                </>
            ),
            photos: [
                foodDriveOne,
                foodDriveTwo,
                foodDriveThree,
                foodDriveFour,
                foodDriveFive,
                foodDriveSix,
                foodDriveSeven,
                foodDriveEight
            ]
        }
    ];

    const sortedOutreaches = [...outreaches].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const toggleCard = (index) => {
        setOpenCard(openCard === index ? null : index);
    };

    return (
        <section className="outreachesPage">
            <div className="outreachesHero">
                <p className="outreachesEyebrow">Kingdom Impact</p>

                <h1>Outreaches</h1>

                <p>
                    A look into the community initiatives, service moments, and purpose driven
                    work led through Miss Kingdom Impact.
                </p>
            </div>

            <div className="outreachesList">
                {sortedOutreaches.map((outreach, index) => {
                    const isOpen = openCard === index;
                    const visiblePhotos = isOpen
                        ? outreach.photos
                        : outreach.photos.slice(0, 3);

                    return (
                        <article className="outreachCard" key={outreach.title}>
                            <div className="outreachCardTop">
                                <div className="outreachTitleBlock">
                                    <p className="outreachDate">{outreach.date}</p>
                                    <h2>{outreach.title}</h2>
                                </div>

                                <button
                                    className="outreachReadMore"
                                    onClick={() => toggleCard(index)}
                                    type="button"
                                >
                                    {isOpen ? "Close" : "Read More"}
                                </button>
                            </div>

                            <p className="outreachSummary">{outreach.summary}</p>

                            <div
                                className={
                                    isOpen
                                        ? "outreachPhotoGrid outreachPhotoGridOpen"
                                        : "outreachPhotoGrid outreachPhotoGridClosed"
                                }
                            >
                                {visiblePhotos.map((photo, photoIndex) => (
                                    <div className="outreachPhoto" key={photoIndex}>
                                        <img
                                            src={photo}
                                            alt={`${outreach.title} ${photoIndex + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            {!isOpen && outreach.photos.length > 3 && (
                                <p className="outreachPhotoHint">
                                    {outreach.photos.length - 3} more photos available
                                </p>
                            )}

                            {isOpen && (
                                <div className="outreachExpanded">
                                    <div className="outreachExpandedLabel">
                                        Outreach Details
                                    </div>

                                    <div className="outreachExpandedContent">
                                        {outreach.content}
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}