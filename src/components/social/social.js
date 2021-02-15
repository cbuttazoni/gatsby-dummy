import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './social.module.scss';

const Social = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              name
              url
            }
          }
        }
      }
    `
  );
  return (
    <section className={styles.social}>
      <h3>Social</h3>
      <ul>
        {data?.site?.siteMetadata?.social?.map((link) => (
          <li key={link.name}>
            <a href={link.url} rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

Social.defaultProps = {};
Social.propTypes = {};

export default Social;