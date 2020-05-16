import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Wrapper = styled.footer`
  width: 90%;
  border-top: .1rem solid #999;
  margin: 5rem 5% 0;
  padding: 0 2rem;
  height: 5rem;
  color: #666;
  font-size: 1.1rem;
  user-select: none;
  align-self: center;
  line-height: 5rem;
  display: flex;
  justify-content: space-between;
`

const Separator = styled.span`
  background-color: #fff;
  color: #666;
  font-size: 1.1rem;
  margin: .65rem 0;
`

const RightList = styled.ul`
  list-style: none;
`

const inline = css`
  display: inline;
  min-width: 10px;
  padding: 0 3px;
`

const Link = styled.a`
  color: #666;

  &:hover {
    color: #146a8f;
    text-decoration: none;
  }  
`

const Footer = props => {

  const createRight = arr => {
    let separatorKey = 0;

    return arr.map((x, i) => (
      <li key={i} css={inline}><Link>{x}</Link></li>
    )).reduce((prev, curr) => [
      prev,
      <li key={"s" + separatorKey++} css={inline}><Separator>|</Separator></li>,
      curr
    ])
  }

  return (
    <Wrapper>
      <div>All rights reserved. © 2016 i-MOS Team</div>
      <RightList>
        {
          createRight([
            "Terms of Use",
            "Privacy Policy",
            "Disclaimers",
            "Sitemap"
          ])
        }
      </RightList>
    </Wrapper>
  )
}

export default Footer