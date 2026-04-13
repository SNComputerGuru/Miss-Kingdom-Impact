import React from "react";
import "../styles/blog.css";

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "Empowering Women Through Leadership",
            date: "March 1, 2026",
            snippet: "Miss Kingdom Impact develops young women into confident leaders through mentorship, faith, and service.",
        },
        {
            id: 2,
            title: "Faith and Purpose in Action",
            date: "February 20, 2026",
            snippet: "See how our contestants engage in community service and philanthropic initiatives that create real impact.",
        },
        {
            id: 3,
            title: "The Journey to Confidence",
            date: "February 5, 2026",
            snippet: "Discover how MKI helps young women discover their identity and walk boldly in their God-given purpose.",
        },
    ];

    return (
        <section className="blogSection">
            <h2>Blog</h2>
            <div className="blogPosts">
                {posts.map(post => (
                    <div key={post.id} className="blogPost">
                        <h3>{post.title}</h3>
                        <p className="date">{post.date}</p>
                        <p className="snippet">{post.snippet}</p>
                        <button className="readMore">Read More</button>
                    </div>
                ))}
            </div>
        </section>
    );
}