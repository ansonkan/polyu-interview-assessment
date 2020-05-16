import React from "react"
import styled from "@emotion/styled"

import HiddenMenu from "./hidden-menu"

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const Item = styled.li`
  &:hover {
    background: -webkit-linear-gradient(left top,#d08638,#d5a72a);
  }
`

const Link = styled.a`
  font-size: 1.4rem;
  color: #666;
  text-decoration: none;
  display: block;
  padding: 1.2rem 3rem;

  &:hover {
    color: #fff;
  }
`

const Sitemenu = props => {

  return (
    <HiddenMenu>
      <List>
        {
          [
            "News and Events",
            "Discussions",
            "Documents",
            "Resources",
            "Activities",
            "Contributors"
          ].map((x, i) => (
            <Item key={i}>
              <Link href="#" onClick={() => props.closeFunc()}>
                {x}
              </Link>
            </Item>
          ))
        }
      </List>
    </HiddenMenu>
  )
}

export default Sitemenu