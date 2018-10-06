import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({data}) => (
<Layout>
<div>
    
    <h2>Contact Us</h2>
    <div>Please send all inqueries to:</div>
    <div>{data.site.siteMetadata.contact.name}</div>
    <div>{`C/O ${data.site.siteMetadata.contact.company}`}</div>
    <div>{data.site.siteMetadata.contact.address}</div>

</div>
</Layout>
);

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                    address
                }
            }
        }
    }
`;