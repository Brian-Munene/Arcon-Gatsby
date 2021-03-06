import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
    <StaticImage
      src="../../images/logo.jpg"
      layout='fixed'
      width={90}
      height={40}
      quality={80}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="arcon logo"
    />
    </LogoWrap>
  )
}

export default Logo
