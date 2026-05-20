import { Link } from "react-router-dom";
import "../styles/vote.css";

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

export default function Vote() {
    const shuffledFinalists = [...finalists].sort(
        () => Math.random() - 0.5
    );

    return (
        <section className="votePage">
            <div className="voteHero">
                <p className="voteEyebrow">Miss Kingdom Impact</p>

                <h1>Vote For Your Finalist</h1>

                <p>
                    Support your favourite finalist by purchasing votes and
                    becoming part of her journey.
                </p>
            </div>

            <div className="voteGrid">
                {shuffledFinalists.map((finalist) => (
                    <Link
                        to={`/vote/${finalist.id}`}
                        className="voteCard"
                        key={finalist.id}
                    >
                        <div className="voteImageWrap">
                            <img
                                src={finalist.image}
                                alt={finalist.name}
                            />
                        </div>

                        <div className="voteCardContent">
                            <p className="voteCode">
                                {finalist.code}
                            </p>

                            <h2>{finalist.name}</h2>

                            <span className="voteButton">
                                Vote Now
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}