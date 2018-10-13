import React,{ Component } from 'react';
import PropTypes from'prop-types';

import Layout from '../components/layout'
import { graphql } from 'gatsby';

class BlogPost extends Component{
    render(){
        const{title}= this.props.data.contentfulBlogPost;
        return(
            <Layout>
                <h1>{title}</h1>
            </Layout>
        )
    }
}
BlogPost.propTypes={
    data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            slug
        }
    }
`