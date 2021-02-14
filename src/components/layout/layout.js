import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import MetaData from '../meta-data/meta-data';
import defaultCoverImage from '../../images/cover.jpg';
import styles from './layout.module.scss';

export default ({ children, location, image }) => {
  const coverImage = image || defaultCoverImage;
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            useLogo
            menuLinks {
              name
              link
              published
            }
            footerLinks {
              name
              link
              published
            }
          }
        }
      }
    `
  );
  return (
    <React.Fragment>
      <MetaData title={data.site.siteMetadata.title} />
      <div className={styles.wrapper}>
        <header className={[styles.full_bleed, styles.header].join(' ')}>
          <Header siteMetadata={data.site.siteMetadata} />
        </header>
        <img
          className={[styles.full_bleed, styles.cover].join(' ')}
          alt="Cover image description"
          src={coverImage}
        />
        <main className={styles.main_wrapper}>{children}</main>
        <footer className={[styles.full_bleed, styles.footer].join(' ')}>
          <Footer siteMetadata={data.site.siteMetadata} />
        </footer>
      </div>
    </React.Fragment>
  );
};
