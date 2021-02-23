import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Navigation from '../../components/navigation/navigation';
import styles from './header.module.scss';
import logo from '../../images/logo2.png';
import logoMobile from '../../images/logo2-mobile.png';

const Header = ({ siteMetadata }) => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_inner_wrapper}>
        {siteMetadata?.useLogo ? (
          <div className={styles.header_logo}>
            <img className={styles.header_logo__desktop} src={logo} alt="Logo" />
            <img className={styles.header_logo__mobile} src={logoMobile} alt="Logo mobile" />
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

Header.defaultProps = {};
Header.propTypes = {
  siteMetadata: PropTypes.object,
};

export default Header;