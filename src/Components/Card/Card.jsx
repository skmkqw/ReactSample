import styles from './Card.module.css'
import landscapePic from '../../assets/wallpaper.jpg'

function Card()
{
    return (
        <div className={styles.card}>
            <img src={landscapePic} alt="Landscape picture" className={styles.cardPicture}/>
            <div className={styles.cardContent}>
                <h3 className={styles.cardName}>Card title</h3>
                <p className={styles.cardDescription}>This is a card description. And some more description</p>
            </div>
        </div>
    );
}

export default Card