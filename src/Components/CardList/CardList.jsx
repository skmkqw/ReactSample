import styles from './CardList.module.css'
import Card from "../Card/Card.jsx";

function CardList({ cards }){

    return(
        <div className={styles.cardList}>
            <h2 className={styles.cardListTitle}>
                {cards.length > 1 ? "Cards" : "Card"}
            </h2>
            <div className={styles.cardListContainer}>
                {cards.map(card =>
                    <Card key={card.id} name={card.name} date={card.date} />
                )}
            </div>
        </div>
    );
}

export default CardList