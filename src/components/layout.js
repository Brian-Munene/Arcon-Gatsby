/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/footer"
import "./layout.css"
import styled from 'styled-components'

const BodyWrapper = styled.div`
  display: grid;
  grid-template-rows: [row1-start] auto [row1-end row2-start] auto [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "main main main"
    "footer footer footer";
  min-height: 100vh;
`

const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      <BodyWrapper>
      <div
        // style={{
        //   maxWidth: 960,
        // }}
      >
        <main>{children}</main>
      </div>
      <Footer/>
      </BodyWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
