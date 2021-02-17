import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';
import Social from '../social/social';

const Footer = ({ siteMetadata }) => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_inner_wrapper}>
        <div>
          <h4>Address</h4>
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
          <h4>Links</h4>
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

Footer.defaultProps = {};
Footer.propTypes = {
  siteMetadata: PropTypes.object,
};

export default Footer;
