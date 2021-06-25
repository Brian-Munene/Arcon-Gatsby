import React from "react"

import TransitionLink from 'gatsby-plugin-transition-link'

// import Link from 'gatsby-plugin-transition-link'

import styled from 'styled-components'

const NavItem = styled(TransitionLink)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  align-items: baseline; 
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "->";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
      color: goldenrod;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/training">Training</NavItem>
      <NavItem
        to="/portfolio"
        exit={{
        // trigger: ({exit, node}) => leaving(exit, node),
        length: 1
        }}
        entry={{
          // trigger: ({ enter, node }) => entering(enter, node),
          length: 1,
          delay: 0.6
        }}
      >
        Portfolio
      </NavItem>
      <NavItem to="/services">Services</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contacts">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
