import styles from './Footer.module.css';
function Footer()
{
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Sample website</p>
        </footer>
    );
}

export default Footer