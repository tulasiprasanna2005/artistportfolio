import React from "react";
import "./Collection.css";

function Collection() {
  const collections = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7Eg4Q0cE7hxrMjuF5P3JaF_9ikj_fHY8TA&s",
      title: "Charcoal Collection",
      desc: "A series of charcoal sketches exploring light and shadows.",
    },
    {
      id: 2,
      img: "https://img.freepik.com/premium-photo/stunning-painting-capturing-beauty-roaring-waterfall-amidst-dense-forest-showcasing-natures-power-splendor-enchanted-forest-with-magical-water-spring-ai-generated_538213-20380.jpg",
      title: "Nature Series",
      desc: "Capturing the beauty of forests, rivers, and landscapes.",
    },
    {
      id: 3,
      img: "https://ww2.kqed.org/app/uploads/sites/2/2023/04/Vincent-Favilla-_Pondering_-768x528.jpg",
      title: "Abstract Lines",
      desc: "A creative take on abstract minimal sketching.",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFeie6Ig9TPvW6FdSIT0xJNDeKy-3nSzGLw&s",
      title: "Digital Sketch",
      desc: "A digital sketch art, modern lines and shapes, subtle colors",
    },
  ];

  return (
    <div className="collection-section">
      <h1>Art Collections</h1>
      <p>Explore my curated series of artworks and sketches.</p>

      <div className="collection-grid">
        {collections.map((col) => (
          <div className="collection-card" key={col.id}>
            <img src={col.img} alt={col.title} />
            <div className="collection-content">
              <h3>{col.title}</h3>
              <p>{col.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
