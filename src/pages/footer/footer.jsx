import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Co_footer() {
    return(
        <div className={styles.main_footer}>

            <p>Find me on social media.</p>

            <div className={styles.icons}>
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" className={styles.ic}/>
                <FontAwesomeIcon icon="fa-brands fa-instagram" className={styles.ic}/>
                <FontAwesomeIcon icon="fa-brands fa-snapchat" className={styles.ic}/>
                <FontAwesomeIcon icon="fa-brands fa-pinterest" className={styles.ic}/>
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" className={styles.ic}/>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className={styles.ic}/>
            </div>

            <p>Remade by Boima, original idea from W3Schools.</p>

        </div>
    );
}

export default Co_footer