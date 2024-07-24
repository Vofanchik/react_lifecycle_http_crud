
import Card from '../Card/Card';
import './Cards.css';

function Cards({ cards, onDeleteCard }) {

    return (
        <div className="Cards">
            {cards.map((item) => {
                return <Card
                    text={item.content}
                    key={item.id}
                    onDeleteCard = {onDeleteCard}
                    id = {item.id}
                />
            })}
        </div>
    );
}

export default Cards;