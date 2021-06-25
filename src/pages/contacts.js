import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'


const ContactWrapper = styled.div`
  grid-area: main;
  height: 50%;
  margin-bottom: 1.45rem;
  position: relative;
  align-self: center;
  padding-top: 2.3rem;
`

const ContactTitle = styled.h1`
  margin-left: 8rem;
  font-size: 4rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    margin-left: 1.8rem;
  }
`
const ContactMessage = styled.h3`
  margin-left: 9rem;
  @media (max-width: 768px) {
    margin-left: 2.4rem;
  }
`
const ContactPage = () => {
  return (
    <Layout>
      <ContactWrapper>
      <ContactTitle> Contact Us</ContactTitle>
        <ContactMessage>Speak to an Expert</ContactMessage>
      <Seo title="Contact us" />
      </ContactWrapper>
    </Layout>
  )
}
export default ContactPage
