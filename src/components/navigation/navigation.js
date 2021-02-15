import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './navigation.module.scss';

const Navigation = ({ menuLinks }) => {
  return (
    <nav className={styles.navigation}>
      <input className={styles.menu_btn} type="checkbox" id="menu-btn" />
      <label className={styles.menu_icon} htmlFor="menu-btn">
        <span className={styles.nav_icon}></span>
      </label>
      <ul className={styles.menu}>
        {menuLinks
          ?.filter((e) => e.published)
          .map((link) => (
            <li key={link.name}>
              <Link to={link.link} aria-haspopup={link?.subMenu?.length > 0 ? true : false}>{link.name}</Link>
              {link.subMenu && link.subMenu.length > 0 ? (
                <ul aria-label="submenu">
                  {link.subMenu.map((subLink) => (
                    <li key={subLink.name}>
                      <a href={subLink.link}>{subLink.name}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
      </ul>
    </nav>
  );
};

Navigation.defaultProps = {};
Navigation.propTypes = {
  menuLinks: PropTypes.arrayOf(PropTypes.object),
};

export default Navigation;
