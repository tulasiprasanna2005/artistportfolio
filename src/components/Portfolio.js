import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const artworks = [
    { id: 1, img: "https://skyryedesign.com/wp-content/uploads/2024/08/Viewing-Deck-Blog-2024-08-16T010910368.jpg", title: "Portrait Sketch" },
    { id: 2, img: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/49633/280624/1583412726203_IMG_20200206_114529-01__42019.1687414549.jpg?c=2", title: "Abstract Lines" },
    { id: 3, img: "https://bsybeedesign.com/wp-content/uploads/2024/11/Image-4-2.jpg", title: "Nature Drawing" },
    { id: 4, img: "https://m.media-amazon.com/images/I/61xXQ+7eV4L._UF894,1000_QL80_.jpg", title: "Charcoal Art" },
    { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEWW-WbWizAdHwiuomTTfzzYexZm9Aftvtg&s", title: "Digital Sketch" },
  ];

  return (
    <div className="portfolio-section">
      <h1>My Portfolio</h1>
      <p>A showcase of my favorite sketches and artworks.</p>

      <div className="portfolio-grid">
        {artworks.map((art) => (
          <div className="portfolio-card" key={art.id}>
            <img src={art.img} alt={art.title} />
            <div className="overlay">
              <span>{art.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
