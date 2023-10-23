import { useState } from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    const {title, description, experienceRequired} = props;

    const clickHandler = () => {
        setShowDetails(prevState => !prevState);
    }
    return (
        <div className={styles.cardStyle} onClick={clickHandler}>
            <h2>{title}</h2>
            {showDetails && <p><b>Description:</b> {description}</p>}
            {showDetails && <p><b>Experience:</b> {experienceRequired}</p>}
        </div>
    )
};


export default Card;