import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  position: absolute;
  top: 6.5rem;
  z-index: 900;
  background-color: #dadcdf;
  color: #666;
  box-shadow: 3px 1px 10px #888;
  color: #666;
  opacity: .9;
`

const HiddenMenu = props => {

  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default HiddenMenu