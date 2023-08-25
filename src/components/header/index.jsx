import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Gustavo Alves</span>
            </Link>
        </header>
    )
}
export default Header