import "./Card.css"

const Card = ({ title, description, id, deleteTask }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteTask(id)}>🗑</button>
    </div>
  );
};

export default Card;