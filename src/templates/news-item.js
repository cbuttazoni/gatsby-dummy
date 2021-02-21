import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import MetaData from '../components/meta-data/meta-data';
import Heading from '../components/heading/heading';

const NewsItemTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const coverImageFluid = post.frontmatter.coverImage?.childImageSharp?.fluid;

  return (
    <Layout>
      <MetaData
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Heading
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <article>
        {coverImageFluid ? <Img fluid={coverImageFluid} /> : null}
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>news footer info...</footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && previous.frontmatter.type === post.frontmatter.type && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.frontmatter.type === post.frontmatter.type && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

NewsItemTemplate.defaultProps = {};
NewsItemTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default NewsItemTemplate;
export const pageQuery = graphql`
  query NewsItemBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        description
        type
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
`;
