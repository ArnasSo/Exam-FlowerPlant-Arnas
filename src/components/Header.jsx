import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
// summary: i use link for simple navigation and navlink to navigate AND make sure of the state
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* since there is no page reload, i use <Link /> only to change route */}
        <Link to="/" className={styles.brand}>
          FlowerPlant
        </Link>

        <nav className={styles.nav}>
            {/* i use navlinks below so i can style according to route */}
            {/* very important detail to use "end" to make sure its only active when exactly / */}
          <NavLink to="/" end className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/myplants" className={styles.navLink}>
            My Plants
          </NavLink>
          <NavLink to="/about" className={styles.navLink}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}