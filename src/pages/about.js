import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
      query SiteDescriptionQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `)

  return (
    <Layout>
      <h1> About US</h1>
      <hr/>
      <p> {data.site.siteMetadata?.description || `We are Arcon`} </p>
      <Seo title="About" />

    </Layout>
  )
}
export default AboutPage
