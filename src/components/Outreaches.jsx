import { useState } from "react";
import "../styles/outreaches.css";

export default function Outreaches() {
    const [openCard, setOpenCard] = useState(null);

    const outreaches = [
        {
            title: "Food Drive",
            date: "16 Dec 2025",
            summary:
                "The outreach focused on sharing food items with those in need, while spreading the word of God and encouragement to families and individuals.",
            content: (
                <>
                    <p>
                        A look into the community initiatives, service moments, and purpose-driven work led by Miss Kingdom Impact.
                    </p>

                    <p>
                        One of the core pillars of Miss Kingdom impact is Impact/Service. We believe that as Ambassadors of Christ, our lives should be ones of service and love.
                    </p>

                    <p>
                        The Food Drive was one of the first outreach initiatives, created to extend love, dignity, and practical support to members of the community.
                    </p>
                </>
            ),
            photos: [
                "https://ik.imagekit.io/yq17ihow7e/food-drive-1.jpeg",
                "https://ik.imagekit.io/yq17ihow7e/food-drive-2.jpeg",
                "https://ik.imagekit.io/yq17ihow7e/food-drive-3.jpeg",
                "https://ik.imagekit.io/yq17ihow7e/food-drive-4.jpeg",
                "https://ik.imagekit.io/yq17ihow7e/food-drive-5.jpeg",
                "https://ik.imagekit.io/yq17ihow7e/food-drive-6.jpeg",
                "https://ik.imagekit.io/yq17ihow7e/food-drive-7.jpeg",
                "https://ik.imagekit.io/yq17ihow7e/food-drive-8.jpeg"
            ]
        },
        {
            title: "Welcoming Sash Ceremony",
            date: "11 Jul 2026",
            summary:
                "The Miss Kingdom Impact welcoming sash ceremony is a sacred commissioning moment that officially welcomes and recognises the selected participants as ambassadors of Miss Kingdom Impact.",
            content: (
                <>
                    <p>
                        The Miss Kingdom Impact welcoming sash ceremony is a sacred commissioning moment that officially welcomes and recognises the selected participants as ambassadors of Miss Kingdom Impact.
                    </p>
                </>
            ),
            photos: [
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2301.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2470.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2625.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1933.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2015.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2602.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2005.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2622.jpg",

                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1894.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2001.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2021.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1875.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1953.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2138.jpg",

                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1856.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1957.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2027.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1925.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2208.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2178.jpg",

                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1882.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1917.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1907.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1914.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1886.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1881.jpg",

                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2009.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2140.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_2456.jpg",
                "https://ik.imagekit.io/yq17ihow7e/Finalists/Sashing%20Ceremony/_MG_1977.jpg"
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
                                    <div className="outreachPhoto" key={`${outreach.title}-${photoIndex}`}>
                                        <img
                                            src={photo}
                                            alt={`${outreach.title} ${photoIndex + 1}`}
                                            loading={photoIndex === 0 ? "eager" : "lazy"}
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
                                        Details
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