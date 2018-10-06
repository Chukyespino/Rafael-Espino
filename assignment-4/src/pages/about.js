import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({data}) => (
<Layout>
<div>
    <h2>About Us</h2>
    <p>{`
        ${data.site.siteMetadata.contact.name} started 
        ${data.site.siteMetadata.contact.company}many years ago with a vision and $20 dollars in his pocket.
                                                 He is widely known as the best VSCode extenion reviewer around.`}
    </p>
</div>
</Layout>

);

export const query = graphql`
    query {
        site {
            siteMetadata{
                contact{
                    name
                    company
                }
            }
        }
    }
`;