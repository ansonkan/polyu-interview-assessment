import React from "react"
import styled from "@emotion/styled"

import MainImage from "../../static/main.png"
import Intro from "./intro"
import ModelIntro from "./model-intro"

const Wrapper = styled.div`
  width: 100%;
`

const LandingImage = styled.img`
  width: 100%;
`

const Main = props => {

  return (
    <Wrapper>
      <LandingImage src={MainImage} alt="Interative modeling and online simulation platform" />
      <Intro />
      <ModelIntro />
    </Wrapper>
  )
}

export default Main