import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Logo from "../../static/logo.png"
import MlLogo from "../../static/ml.png"
import SpLogo from "../../static/sp.png"
import UserLogo from "../../static/user.png"
import SearchLogo from "../../static/search.svg"

import Sitemenu from "./sitemenu"

const Wrapper = styled.header`
  z-index: 100;
  top: 0;
  height: 6.5rem;
  background-color: #1a1a1a;
  color: #fff;
`

const LogoWrapper = styled.div`
  float: left;
`

const logo = css`
  height: 3.4521rem;
  margin: 1.52395rem 3.4rem;
`

const Menu = styled.div`
  float: left;
  height: 2.6rem;
  margin: 1.95rem 0;
`

const MenuList = styled.ul`
  height: 100%;
  list-style: none;
`

const menuListItem = css`
  float: left;
  height: 100%;
  margin: 0 1rem;
  cursor: pointer;
`

const smallLogo = css`
  float: left;
  height: 100%;
  margin: 0 1rem;
`

const menuListItemTitle = css`
  float: left;
  line-height: 2.6rem;
  font-size: 1.5rem;
  font-weight: 400;
`

const Submenu = styled.div`
  float: left;
  height: 2.6rem;
  margin: 1.95rem 5rem;
`

const submenuListItem = css`
  float: left;
  height: 100%;
  margin: 0 .5rem;
`

const submenuListItemTitle = css`
  line-height: 2.6rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 400;
`

const separator = css`
  float: left;
  background-color: #fff;
  width: .1rem;
  height: 1.3rem;
  margin: .65rem 0;
`

const User = styled.div`
  float: right;
  height: 2.6rem;
  margin: 1.95rem 2rem;
`

const userLogo = css`
  float: left;
  height: 2rem;
  margin: .3rem;
`

const Search = styled.div`
  float: right;
  height: 2.6rem;
  margin: 1.95rem 0;
  width: 11%;
  background-color: #fff;
  border-radius: 2.5rem;
  border: none;
`

const Form = styled.form`
  height: 100%;
`

const SearchInput = styled.input`
  float: right;
  height: 100%;
  width: 61%;
  margin-right: 1rem;
  text-align: right;
  border: none;
  background-color: transparent;
  outline: 0 none!important;
  font-size: 1.1rem;
  font-family: Montserrat,sans-serif;
  font-weight: 700;
`

const searchLogo = css`
  height: 1.8rem;
  float: left;
  margin: .3rem .6rem;
`

const createSubmenuList = arr => arr.map(({ text, hidden }, i) => (
  <li keys={i} css={submenuListItem}>
    <h1 css={submenuListItemTitle}>{text}</h1>
    {hidden}
  </li>
)).reduce((prev, curr) => [prev, <li css={submenuListItem}><span css={separator}></span></li>, curr])

const Header = props => {

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={Logo} css={logo} alt="logo"></img>
      </LogoWrapper>
      <Menu>
        <MenuList>
          {
            [
              { src: MlLogo, alt: "ml logo", text: "Model Library" },
              { src: SpLogo, alt: "sp logo", text: "Simulation Platform" }
            ].map(({ src, alt, text }) => (
              <li css={menuListItem}>
                <img src={src} css={smallLogo} alt={alt}></img>
                <h1 css={menuListItemTitle}>{text}</h1>
              </li>
            ))
          }
        </MenuList>
      </Menu>
      <Submenu>
        <MenuList>
          {createSubmenuList([
            { text: "Site Menu", hidden: <Sitemenu /> },
            { text: "Contact Us", hidden: <Sitemenu /> }
          ])}
        </MenuList>
      </Submenu>
      <User>
        <MenuList>
          <li css={submenuListItem}><img src={UserLogo} css={userLogo} alt="user" /></li>
          {createSubmenuList([
            { text: "Login", hidden: <Sitemenu /> },
            { text: "Register", hidden: <Sitemenu /> }
          ])}
        </MenuList>
      </User>
      <Search>
        <Form>
          <img src={SearchLogo} css={searchLogo} alt="search" />
          <SearchInput type="text" maxlength="128" placeholder="Search" />
        </Form>
      </Search>
    </Wrapper>
  )
}

export default Header