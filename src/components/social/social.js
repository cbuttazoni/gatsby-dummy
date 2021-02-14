import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './social.module.scss';

export default () => {
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
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
