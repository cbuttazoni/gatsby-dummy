import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import MetaData from '../components/meta-data/meta-data';
import styles from './index.module.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Index = ({ data }) => {
  const news = data.allMarkdownRemark.edges;
  
  return (
    <Layout>
      <MetaData title="Home" />
      <h1>Welcome surfer...</h1>
      <div className={styles.grids}>
        {news.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const coverImageFluid = node.frontmatter?.coverImage?.childImageSharp?.fluid;

          return (
            <article key={node.fields.slug} className={styles.card}>
              <header>
              {coverImageFluid ? <Img fluid={coverImageFluid} /> : null}
                <h2>
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </div>
      <div className="h-space--md"></div>
      <button className="button -small" onClick={() => scrollTo('#top')}>Top &uarr;</button>
    </Layout>
  );
};

Index.defaultProps = {};
Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "news" }, draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            description
            coverImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
