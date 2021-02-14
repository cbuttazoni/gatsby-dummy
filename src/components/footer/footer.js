import React from 'react';
import { Link } from 'gatsby';
import styles from './footer.module.scss';
import Social from "../social/social"

export default ({ siteMetadata }) => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_inner_wrapper}>
        <div>
          <p className={styles.footer_title}>Address</p>
          <p>
            dummy name
            <br />
            dummy address
            <br /> dummy street
            <br /> dummy etc...
            <br />
          </p>
        </div>
        <div>
          <p className={styles.footer_title}>Links</p>
          <p>
            &copy; {new Date().getFullYear()} {siteMetadata?.title}
          </p>
          <ul className={styles.menu}>
            {siteMetadata?.footerLinks
              ?.filter((e) => e.published)
              .map((link) => (
                <li key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
          </ul>
          <Social />
        </div>
      </div>
    </div>
  );
};
