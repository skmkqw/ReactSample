import styles from './Card.module.css'
import landscapePic from '../../assets/wallpaper.jpg'
import PropTypes from 'prop-types';
import {useState} from "react";
function Card(props)
{
    const [isActive, setActive] = useState(false);
    const handleClick = () => setActive(!isActive);

    return (
        <div className={`card ${styles.card} ${isActive ? styles.cardActive : ''}`}  onClick={() => handleClick()}>
            <img src={landscapePic} alt="Landscape picture" className={styles.cardPicture}/>
            <div className={styles.cardContent}>
                <h3>{props.name}</h3>
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