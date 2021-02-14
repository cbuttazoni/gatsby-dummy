import React from "react"
import { Link } from "gatsby"
import styles from "./navigation.module.scss"

export default ({ menuLinks }) => {
  return (
    <nav className={styles.navigation}>
      <input className={styles.menu_btn} type="checkbox" id="menu-btn" />
      <label className={styles.menu_icon} htmlFor="menu-btn">
        <span className={styles.nav_icon}></span>
      </label>
      <ul className={styles.menu}>
        {menuLinks?.filter(e=> e.published).map((link) => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
