import './Card.css';

function Card({text, onDeleteCard, id}) {

  return (
    <div className="Card">
        {text}
        <button onClick={() => onDeleteCard(id)}>X</button>
    </div>
  );
}

export default Card;