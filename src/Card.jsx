function Card({ title, subtitle }) {
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
      <h2>{subtitle}</h2>
    </div>
  );
}

export default Card;
