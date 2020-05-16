import React from "react"
import styled from "@emotion/styled"

import Icon1 from "../../static/intro-icon-1.png"
import Icon2 from "../../static/intro-icon-2.png"
import Icon3 from "../../static/intro-icon-3.png"
import Sh1 from "../../static/intro-sh-1.png"
import Sh2 from "../../static/intro-sh-2.png"

import { linkBlue } from "../utilities/common-css"

const Wrapper = styled.div`
  width: 80%;
  margin: 80px 10% 20px 10%;
`

const Upper = styled.div`
  display: flex;
`

const IntroMain = styled.div`
  width: 70%;
`

const IntroIcons = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const IntroTitle = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 20px;
`

const IntroP = styled.p`
  color: #4d4d4d;
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
`

const IconCard = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const Icon = styled.img`
  width: 25%;
  margin-bottom: 20px;
`

const IconLabel = styled.label`
  text-align: center;
  margin-bottom: 5px;
`

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
`

const Sh = styled.img`
  width: 49%;
`

const Intro = props => {

  return (
    <Wrapper>
      <Upper>
        <IntroMain>
          <IntroTitle>
            The i-MOS Project
            <br />
            An Open Platform for Device Modeling and Circuit Simulation
          </IntroTitle>
          <IntroP>
            i-MOS is an open platform for model developers and circuit designers to interact. Model developers can implement their models over the i-MOS platform to promote their acceptance and obtain user feedback. Circuit designers can use the platform to try
            out the most recent models of many newly developed devices before they are released by EDA vendors. The platform provides a standard interface so that users can evaluate and compare models easily. Standard benchmark tests can also be performed on the
            models. Currently, the platform can only output the characteristics of models. In phase II of the project, an online simulation engine will be provided and users can directly perform simulation over the i-MOS server any time and anywhere as long as
            they can get connected to the Internet.
          </IntroP>
          <IntroP>
            Please note that the site is lightly moderated. We'll honor all the postings, but we will exercise our right to remove spam, hostile, irrelevant and offending postings.
          </IntroP>
          <a href="#" css={linkBlue}>> Browse News About i-MOS</a>
        </IntroMain>
        <IntroIcons>
          {
            [
              { desc: "Online Platform", src: Icon1 },
              { desc: "Interaction Platform", src: Icon2 },
              { desc: "Real Time Simulation", src: Icon3 }
            ].map(({ desc, src }, i) => (
              <IconCard key={i}>
                <Icon src={src} />
                <IconLabel>{desc}</IconLabel>
              </IconCard>
            ))
          }
        </IntroIcons>
      </Upper>
      <Lower>
        <Sh src={Sh1} alt="Screen shot 1" key={1} />
        <Sh src={Sh2} alt="Screen shot 1" key={2} />
      </Lower>
    </Wrapper>
  )
}

export default Intro