import React from "react";
import "./News.css";

function News() {
  const exhibitions = [
    {
      id: 1,
      date: "March 2025",
      title: "Solo Art Exhibition - 'Shades of Life'",
      location: "Hyderabad Art Gallery",
      desc: "Displayed 20+ charcoal and pencil sketches capturing human emotions."
    },
    {
      id: 2,
      date: "January 2025",
      title: "Art Fair Participation",
      location: "Delhi International Art Fair",
      desc: "Featured abstract sketches in a group exhibition with 30+ artists."
    },
    {
      id: 3,
      date: "November 2024",
      title: "Featured in 'Art Today' Magazine",
      location: "National Magazine",
      desc: "Interview and 5-page spread showcasing my latest sketch collection."
    }
  ];

  return (
    <div className="news-section">
      <h1>News & Exhibitions</h1>
      <p>Stay updated with my latest exhibitions and art features.</p>

      <div className="news-list">
        {exhibitions.map((exhibit) => (
          <div className="news-card" key={exhibit.id}>
            <span className="news-date">{exhibit.date}</span>
            <div className="news-details">
              <h3>{exhibit.title}</h3>
              <p className="news-location">{exhibit.location}</p>
              <p className="news-desc">{exhibit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
