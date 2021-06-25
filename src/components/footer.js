import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import TransitionLink from 'gatsby-plugin-transition-link'

const FooterContainer = styled.div`
  grid-area: footer;
  background-color: whitesmoke;
  padding-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, auto));
  grid-template-rows: repeat(2, minmax(0px, auto));
  
  align-content: center;
  justify-items: center;
  margin-top: 4rem;
  border-radius: 0.5px;
  padding-bottom:  5rem;
  @media (max-width: 768px) {
    //padding-right: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(0px, auto));
    justify-items: center;
    align-content: center;
  }
`
const ContactDetails = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: center;
  place-self: center ;
  

  @media (max-width: 768px) {
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: center;
    place-self: center;
    justify-content: center + ... safe;
    display: flex;
    flex-flow: column wrap;
    padding: 0.5rem;
  }
`
const PhoneList = styled.li`
  text-decoration: none;
  display: block;
`

const Navigation = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  align-self: center;
  place-self: center ;

  @media (max-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
    align-content: center;
    place-self: center;
    justify-content: space-around;
    display: flex;
    flex-flow: row wrap;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 2rem;
  }
`

const Credit = styled.div`
  grid-column: 3/3;
  grid-row: 1/2;
  align-self: center;
  place-self: center ;

  @media (max-width: 768px) {
    grid-column: 2;
    grid-row: 3;
    align-self: center;
    place-self: center;
  }
`

const FooterLink = styled(TransitionLink)`
  text-decoration: None;
  color: inherit;
  display: block;
  font-size: 1.3rem;
  text-transform: capitalize;
  margin-bottom: 0.3rem;

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
      color: goldenrod;
      transform: perspective(400px) translate3d(-10px, 0px, -10px) scale(7.93);
      transition: 0.25s ease-out;
    }
  }
`
const Footer = () => {
  const data = useStaticQuery(graphql`
      query SiteContactsQuery {
        site {
          siteMetadata {
            email,
            phone,
            location
          }
        }
      }
    `)
  const phoneList = data.site.siteMetadata?.phone.map((phone) =>
    <PhoneList>{phone}</PhoneList>
  )
  return (
    <FooterContainer>
          <Navigation>
            <FooterLink to="/training">Training</FooterLink>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contacts">Contact</FooterLink>
          </Navigation>
          <ContactDetails>
            <p> {data.site.siteMetadata?.email} </p>
            <ul>{phoneList}</ul>
            <p>{data.site.siteMetadata?.location}</p>
          </ContactDetails>
      <Credit>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Credit>

    </FooterContainer>
  )
}
export default Footer
