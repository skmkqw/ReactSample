import styles from './Header.module.css';
function Header()
{
    return(
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <h1>React Sample</h1>
                <nav className={"header-nav"}>
                    <ul className={styles.headerLinks}>
                        <li className={styles.headerLink}>
                            <a href="">Home</a>
                        </li>
                        <li className={styles.headerLink}>
                            <a href="">Services</a>
                        </li>
                        <li className={styles.headerLink}>
                            <a href="">About</a>
                        </li>
                        <li className={styles.headerLink}>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header