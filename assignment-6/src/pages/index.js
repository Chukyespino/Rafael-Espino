import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = ({data}) => (
  <Layout>
  <ul>
  {
    data.allContentfulBlogPost.edges.map(edge => (
      <li>
      <Link to={edge.node.slug} key={edge.node.id}>
        {edge.node.title}
      </Link>
      <img src={edge.node.heroImage.fluid.src} alt=""/>
      <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
      </li>
    ))
  }
  </ul>
  </Layout>
);

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost (filter: {
    node_locale: {eq: "en-US"}
  }) {
    edges {
      node {
        title
        slug
        heroImage {
          fluid(maxWidth: 300){
            src
          }    
  			}
      body {
        childMarkdownRemark{
          excerpt
        	}
      	}
      }
    }
  }
}
`