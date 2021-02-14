import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import MetaData from "../components/meta-data/meta-data"

const PageItemTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const coverImageFluid = post.frontmatter.coverImage?.childImageSharp?.fluid

  return (
    <Layout>
      <MetaData
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <header>
          <h1>{post.frontmatter.title}</h1>
          {coverImageFluid ? <Img fluid={coverImageFluid} /> : null}
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <footer>
          <span>erstellt am: {post.frontmatter.date}</span>
        </footer> */}
      </div>
    </Layout>
  )
}

export default PageItemTemplate
export const pageQuery = graphql`
  query PageItemBySlug($slug: String!) {
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
