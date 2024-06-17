import styles from './Card.module.css'
import landscapePic from '../../assets/wallpaper.jpg'
import PropTypes from 'prop-types';
function Card(props)
{
    return (
        <div className={styles.card}>
            <img src={landscapePic} alt="Landscape picture" className={styles.cardPicture}/>
            <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{props.name}</h3>
                <p className={styles.cardDescription}>This is a card description. And some more description</p>
                <p className={styles.cardDescription}>{props.date.toDateString()}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    date: PropTypes.object
}
Card.defaultProps = {
    name: "Card",
    date: new Date()
}
export default Card