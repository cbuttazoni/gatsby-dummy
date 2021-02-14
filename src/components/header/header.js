import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../../components/navigation/navigation';
import styles from './header.module.scss';
import logo from '../../images/logo.png';

export default ({ siteMetadata }) => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_inner_wrapper}>
        {siteMetadata?.useLogo ? (
          <div className={styles.header_logo}>
            <img src={logo} alt="Logo" />
          </div>
        ) : (
          <div className={styles.header_title}>
            <Link to="/">{siteMetadata?.title}</Link>
          </div>
        )}
        <Navigation menuLinks={siteMetadata?.menuLinks} />
      </div>
    </div>
  );
};
