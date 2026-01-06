import { useState } from "react";

function Card({ title, subtitle }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      style={{
        margin: "10px",
        padding: "30px",
        background: "lightgreen",
        width: "200px",
        height: "200px",
        borderRadius: "15px",
      }}
    >
      <h1>{title}</h1>
      <h2>{isLiked ? "👍" : "👎"}</h2>
      <button onClick={() => setIsLiked(true)}>Like</button>
    </div>
  );
}

export default Card;
