import React from "react";
import styles from "./Genre.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CARDS = [
  {
    id: 1,
    title: "Action",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 2,
    title: "  Adventure",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 3,
    title: "Comedy",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 4,
    title: "Drama",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 5,
    title: "Fantasy",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 6,
    title: "Horror",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 7,
    title: "Mystery",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 8,
    title: "Romance",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
  {
    id: 9,
    title: "Action",
    image: "https://via.placeholder.com/150",
    bg: "#72db73",
  },
];

const Genre = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const navigate = useNavigate();
  const handleSelect = (card) => {
    if (selectedCard.includes(card)) {
      setSelectedCard(selectedCard.filter((item) => item.id !== card.id));
    } else {
      setSelectedCard([...selectedCard, card]);
    }
  };
  const handleNext = () => {
    if (selectedCard.length >= 3) {
      localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
      navigate("/widgets");
    } else {
      alert("Please select 3 categories");
    }
  };
  return (
    <div className={styles.genre}>
      <div className={styles.left}>
        <h1 className={styles.title}>Super App</h1>
        <h2 className={styles.subTitle}>
          Choose you <br /> Entertainment <br /> Category
        </h2>
        <div className={styles.selected}>
          {selectedCard.map((item) => (
            <span key={item.id} className={styles.selectedItems}>
              {item.title} &nbsp; &nbsp; &nbsp; &nbsp;
              <span className={styles.x} onClick={() => handleSelect(item)}>
                X
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        {CARDS.map((card) => {
          return (
            <div
              onClick={() => handleSelect(card)}
              className={styles.card}
              key={card.id}
              style={{
                background: card.bg,
                border: selectedCard.includes(card.id)
                  ? "2px solid #ffffff"
                  : "none",
              }}
            >
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          );
        })}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Genre;
