import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"

const global = css`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-size: 10px;
    font-family: Montserrat,sans-serif;
    overflow: auto;
  }

  body {
    font-family: Helvetica Neue, Helvetica,Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
  }

  body, h1, h2, h3, h4, h5, h6, html, ol, ul {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0 0 10px;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }

  body, html {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  div {
    display: block;
  }

  a {
    text-decoration: none;  
  }

  a:hover, a:focus {
    text-decoration: underline;  
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default () => (
  <Wrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>i-MOS</title>
    </Helmet>
    <Global styles={global} />
    <Header />
    <Main />
    <Footer />
  </Wrapper>
)
