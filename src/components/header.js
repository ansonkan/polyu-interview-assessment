import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Logo from "../../static/logo.png"
import MlLogo from "../../static/ml.png"
import SpLogo from "../../static/sp.png"
import UserLogo from "../../static/user.png"
import SearchLogo from "../../static/search.svg"

import SiteMenu from "./site-menu"
import ContactUs from "./contact-us"
import Login from "./login"
import Register from "./register"

const Wrapper = styled.header`
  z-index: 100;
  top: 0;
  height: 6.5rem;
  background-color: #1a1a1a;
  color: #fff;
  min-width: 1100px;
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

const ListItem = styled.li`
  float: left;
  height: 100%;
  margin: 0 .5rem;
`

const ListItemTitle = styled.h1`
  line-height: 2.6rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 400;
`

const Separator = styled.span`
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

const Header = props => {
  // This state controls which hidden menu is shown.
  // Since only one of them can be shown at a time, 
  // this state is just a number which is an ID of one of the menu
  const [expanded, setExpanded] = useState();

  const createSubmenuList = arr => {
    let separatorKey = 0;

    return arr.map(({ id, text, hidden }, i) => (
      <ListItem key={i}>
        {/* To use setExpanded to toggle the menu */}
        <ListItemTitle onClick={() => setExpanded(expanded === id ? null : id)}>
          {text}
        </ListItemTitle>
        {expanded === id ? hidden : null}
      </ListItem>
    )).reduce((prev, curr) => [
      prev,
      <ListItem key={"s" + separatorKey++}><Separator /></ListItem>,
      curr
    ])
  }

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
            ].map(({ src, alt, text }, i) => (
              <li key={i} css={menuListItem}>
                <img src={src} css={smallLogo} alt={alt}></img>
                <h1 css={menuListItemTitle}>{text}</h1>
              </li>
            ))
          }
        </MenuList>
      </Menu>
      <Submenu>
        <MenuList>
          {/* To pass the setExpanded to the hidden menu so they could close themselves */}
          {createSubmenuList([
            { id: 1, text: "Site Menu", hidden: <SiteMenu closeFunc={setExpanded} /> },
            { id: 2, text: "Contact Us", hidden: <ContactUs closeFunc={setExpanded} /> }
          ])}
        </MenuList>
      </Submenu>
      <User>
        <MenuList>
          <ListItem key={3}><img src={UserLogo} css={userLogo} alt="user" /></ListItem>
          {createSubmenuList([
            { id: 3, text: "Login", hidden: <Login closeFunc={setExpanded} /> },
            { id: 4, text: "Register", hidden: <Register closeFunc={setExpanded} /> }
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