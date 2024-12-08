import React, { useState } from "react";
import "./SimilarItems.css";
import image1 from "../images/product1.jpeg";


const SimilarItems = () => {
  const items = [
    {
      id: 1,
      title: "Title",
      price: "0€",
      description: "0.35€/Piece - REF: V4X05",
      category: "ART DE LA TABLE",
      quantity: "20 pièces",
      image: image1, // Replace with actual image paths
    },
    // Duplicate or update for more items
    { id: 2, title: "Title", price: "0€", description: "0.35€/Piece - REF: V4X05", category: "ART DE LA TABLE", quantity: "20 pièces", image: image1 },
    { id: 3, title: "Title", price: "0€", description: "0.35€/Piece - REF: V4X05", category: "ART DE LA TABLE", quantity: "20 pièces", image: image1 },
    { id: 4, title: "Title", price: "0€", description: "0.35€/Piece - REF: V4X05", category: "ART DE LA TABLE", quantity: "20 pièces", image: image1 },
    { id: 5, title: "Title", price: "0€", description: "0.35€/Piece - REF: V4X05", category: "ART DE LA TABLE", quantity: "20 pièces", image: image1 },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (direction === "right") {
      setScrollIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 3)); // Adjust based on visible cards
    }
  };

  return (
    <div className="similar-items-container">
      <h2>Articles similaires</h2>
      <button className="view-collection">VOIR TOUTE LA COLLECTION</button>
      <div className="carousel">
        <button className="scroll-btn left" onClick={() => handleScroll("left")}>
          ◀
        </button>
        <div className="carousel-items">
          {items.slice(scrollIndex, scrollIndex + 3).map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <span className="category">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <p className="description">{item.description}</p>
                <p className="quantity">{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => handleScroll("right")}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default SimilarItems;
