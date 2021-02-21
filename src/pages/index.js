import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';
import MetaData from '../components/meta-data/meta-data';
import Heading from '../components/heading/heading';
import styles from './index.module.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Index = ({ data }) => {
  const news = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <MetaData title="Home" />
      <Heading
        title="Welcome surfers..."
        subTitle="Subtitle"
        description="Short description of the current page"
      />
      <div className={[styles.grids, styles.info].join(' ')}>
        <article className={styles.card}>
          <header>
            <h2>Some text</h2>
          </header>
          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
          </section>
        </article>
      </div>

      <h2>Current events</h2>
      <div className={styles.events}>
        {news.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const coverImageFluid =
            node.frontmatter?.eventCoverImage?.childImageSharp?.fluid;

          return (
            <div key={node.fields.slug} className={styles.event}>
              <div className={styles.event_date}>
                <span className={[styles.event_date__day, 'h1'].join(' ')}>{node.frontmatter.eventDateDay}</span>
                <span className={[styles.event_date__month_year, 'h6'].join(' ')}>{node.frontmatter.eventDateMonthYear}</span>
              </div>
              <div className={styles.event_text}>
                <h3>{title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Link to={node.fields.slug} className={[styles.event_text__button, 'button', 'primary'].join(' ')}>
                  {title}
                </Link>
              </div>
              <div className={styles.event_image}>
                {coverImageFluid ? <Img fluid={coverImageFluid} /> : null}
              </div>

              {/* <header>
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
              </section> */}
            </div>
          );
        })}
      </div>
      <h2>Current news</h2>
      <div className={styles.grids}>
        {news.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const coverImageFluid =
            node.frontmatter?.coverImage?.childImageSharp?.fluid;

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
      <button
        className="button -small -wide -accent"
        onClick={() => scrollTo('#top')}
      >
        Top &uarr;
      </button>
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
            dateFormated: date(formatString: "DD.MM.YYYY")
            eventDateDay: date(formatString: "DD")
            eventDateMonthYear: date(formatString: "MMM YYYY")
            title
            description
            coverImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventCoverImage: coverImage {
              childImageSharp {
                fluid(maxWidth: 500) {
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
