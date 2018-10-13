import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout>
    <ul>
      {
        data.allContentfulBlogPost.edges.map(edge =>(
          <li>
            <Link to={edge.node.slug} key={edge.node.id} > {edge.node.title}</Link>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost (filter:{
    node_locale: {eq: "en-US"}
  }) {
    edges{
      node{
        title
        slug
      }
    }
  }
}
`
