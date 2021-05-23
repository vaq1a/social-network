import styles from './Preloader.module.scss';
import gifLoader from '../../assets/images/preloader.gif';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img className={styles.gif}
                 src={gifLoader}
                 alt="Preloader"/>
        </div>

    )
}

export default Preloader;