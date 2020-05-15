import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

import Header from "../component/header"

const global = css`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-size: 10px;
    font-family: Montserrat,sans-serif;
  }

  body, h1, h2, h3, h4, h5, h6, html, ol, ul {
    margin: 0;
    padding: 0;
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
`

export default () => <div>
  <Helmet>
    <meta charSet="utf-8" />
    <title>i-MOS</title>
  </Helmet>
  <Global styles={global} />
  <Header />
</div>
