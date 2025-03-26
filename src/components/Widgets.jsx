import React, { useRef } from "react";
import styles from "./Widgets.module.css";
import avatar from "../assets/avatar-banner.png";
import { useState } from "react";

const Widgets = () => {
  const [notes, setNotes] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const movies = JSON.parse(localStorage.getItem("selectedCard"));
  const divRef = useRef(null);
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };
  return (
    <div
      className={styles.widgets}
      stytle={{ maxHeight: "100vh", overflowY: "hidden" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <div
          style={{
            gridRow: "1",
            display: "grid",
            gridTemplateRows: "60% 40%",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#5746EA",
              borderRadius: "30px",
              padding: "1rem",
              gap: "10px",
            }}
          >
            <div>
              <img
                src={avatar}
                alt="user"
                width={120}
                height={240}
                style={{ borderRadius: "24px", padding: "1rem" }}
              />
            </div>
            <div>
              <h1
                style={{ color: "white", fontWeight: "bold", fontSize: "36px" }}
              >
                {user.name}
              </h1>
              <p style={{ color: "white", fontSize: "16px" }}>
                {"mail: " + user.email}
              </p>
              <p style={{ color: "white", fontSize: "16px" }}>
                {"UserName: " + user.userName}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "7px",
                }}
              >
                {movies?.map((movie) => (
                  <div
                    key={movie.id}
                    style={{
                      backgroundColor: "#9F94FF",
                      color: "white",
                      fontSize: "16px",
                      padding: "0.5rem",
                      borderRadius: "10px",
                      width: "6rem",
                      marginTop: "7px",
                    }}
                  >
                    {movie.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "orange" }}></div>
        </div>
        <div
          className={styles.focus}
          ref={divRef}
          onKeyDownCapture={handleNotes}
          onClick={() => divRef.current.focus()}
          contentEditable={true}
          onInput={handleNotes}
        >
          {notes}
        </div>
        <div style={{ backgroundColor: "pink", gridColumn: "1/-1" }}></div>
      </div>
      <div style={{ backgroundColor: "blue" }}>Left Side</div>
    </div>
  );
};

export default Widgets;
