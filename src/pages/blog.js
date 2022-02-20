import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
export const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data.allMarkdownRemark.edges)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date} </p>
            <div
              dangerouslySetInnerHTML={{ __html: `${edge.node.html}` }}
            ></div>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
