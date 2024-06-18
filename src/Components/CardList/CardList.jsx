import styles from './CardList.module.css'
import Card from "../Card/Card.jsx";

function CardList({ cards }){

    return(
        <section>
            <h2>
                {cards.length > 1 ? "Cards" : "Card"}
            </h2>
            <div className={styles.cardListContainer}>
                {cards.map(card =>
                    <Card key={card.id} name={card.name} date={card.date} />
                )}
            </div>
        </section>
    );
}

export default CardList