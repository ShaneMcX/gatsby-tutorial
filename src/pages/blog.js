import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <>
      {
        data.posts.nodes.map(node => (
          <article key={node.id}>
            <h3>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
            </h3>
            {node.excerpt}
          </article>
        ))
      }
      </>
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allMdx (sort: { frontmatter: { date: DESC } }) {
      nodes {
        body
        excerpt
        id
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage