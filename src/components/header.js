import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'


const HeaderWrapper = styled.div`
  grid-area: intro;
  //grid-row: 1;
  display:flex;
  flex-flow: row wrap;
  padding: 2rem;
  align-content: center;
  justify-content: center + safe;
  //
  //clip-path: polygon(0% 10%, 100% 10%, 100% 100%, 0% calc(100% + 100px));
  ////align-self: center;
  //background: linear-gradient(145deg, #db6605, #ff7905);
  //background: linear-gradient(to left top, #F56022, whitesmoke);
  //opacity: 95%;
  //box-shadow:  8px 8px 5px #cf6004,
  //  -8px -8px 5px #ff8206;
  //
  //@media (max-width: 768px) {
  //  //flex: 0 1 25px;
  //  //height: 70vh;
  //}
  `

const HeaderContent = styled.h1`
  
  margin: 0 auto;
  width: 100%;
  font-weight: bold;
  text-align: center;
  backdrop-filter: blur(2px);
  border-radius: 10px;
  height: 250px;
  opacity: 0.8;
`
const ImageWrapper =  styled.div`
  //right: -2px;
  //flex: 0 1 36px;
  //align-items: center;
  ////position: absolute;
  //overflow: auto;
  //opacity: 70%;
  //
  //@media (min-width: 768px) and (orientation: landscape) {
  //  flex: 0 1 25px;
  //}
`
const HeaderDiv = styled.div`
  //margin: 0;
  ////position: absolute;
  //opacity: 90%;
  //text-transform: full-size-kana;
  //color: #1d2124;
  //@media (min-width: 768px) and (orientation: landscape) {
  //  flex: 0 1 25px;
  //  font-size: 120px;
  //  color: #1d2124;
  //  position: absolute;
  //  left: 0px;
  //}
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContent>
        <StyledLink
          to="/"
        >
          {siteTitle}
        </StyledLink>
    </HeaderContent>

      <ImageWrapper>
      <StaticImage
        src="../images/under_construction.svg"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        // style={{
        //   marginBottom: `1.45rem`,
        //   float: `right`,
        // }}
      />
      </ImageWrapper>
</HeaderWrapper>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
