import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import MetaData from '../components/meta-data/meta-data';
import styles from './index.module.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <MetaData title="Home" />
      <h1>Welcome surfer...</h1>
      <div className={styles.grids}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug} className={styles.card}>
              <header>
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
        <button onClick={() => scrollTo('#top')}>Top</button>
      </div>
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
          }
        }
      }
    }
  }
`;
