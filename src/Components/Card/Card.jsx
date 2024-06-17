import styles from './Card.module.css'
import landscapePic from '../../assets/wallpaper.jpg'
import PropTypes from 'prop-types';
function Card(props)
{
    const handleClick = (e) => e.target.parentElement.style.backgroundColor = "#a83737";

    return (
        <div className={styles.card} onClick={(e) => handleClick(e)}>
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
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.object
}
export default Card