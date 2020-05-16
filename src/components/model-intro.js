import React from "react"
import styled from "@emotion/styled"

import ModelIntroGallery from "./model-intro-gallery"

import MlLogo from "../../static/ml-2.png"

import { linkBlue } from "../utilities/common-css"

const Wrapper = styled.div`
  background-color: #efefef;
  padding: 50px 10% 20px 10%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
`

const Upper = styled.div`
  display: flex;
`

const LogoWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  width: 50%;
  padding: 9%;
  background-color: #e6e6e6;
  border-radius: 10%;
  box-shadow: 2.5px 1.8px 0.4em 0 #9d9d9d;
`

const UpperText = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

const UpperTitle = styled.div`
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 20px;
`

const UpperDesc = styled.p`
  color: #4d4d4d;
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
`

const LowerTitle = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 20px;
  text-align: center;
`

const LowerCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const LowerCard = styled.div`
  background-color: #4d4d4d;
  width: 49%;
  margin-left: 1%;
  margin-right: 1%;
  padding: 20px;
  min-height: 160px;
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`

const LowerCardMsg = styled.p`
  font-size: 18px;
`

const LowerCardUser = styled.p`
  text-align: right;
  font-size: 12px;
`

const ModelIntro = props => {

  return (
    <Wrapper>
      <Upper>
        <LogoWrapper>
          <Logo src={MlLogo} alt="ML logo" />
        </LogoWrapper>
        <UpperText>
          <UpperTitle>Expanding model library</UpperTitle>
          <UpperDesc>
            It is the intention of i-MOS to provide an authoring tool for model developer to upload their model implemented in Verilog-A code directly to i-MOS for users to test and evaluate. Currently we are using the Automatic Device Model Synthesizer(ADMS) together with experienced programmers to help the compilation of worthwhile models to the i-MOS platform.
          </UpperDesc>
          <a href="#" css={linkBlue}>> Launch Model Library</a>
        </UpperText>
      </Upper>
      <ModelIntroGallery />
      <LowerTitle>User Experience</LowerTitle>
      <LowerCardsWrapper>
        <LowerCard>
          <LowerCardMsg>"Would just like to say many thanks for a incredible post and a all round enjoyable blog"</LowerCardMsg>
          <LowerCardUser>Educlue , </LowerCardUser>
        </LowerCard>
        <LowerCard>
          <LowerCardMsg>"The implementation in i-MOS is the test for maturity of a model, because it will be in the hands and under judgment of the users."</LowerCardMsg>
          <LowerCardUser>Ognian Marinov, McMaster University</LowerCardUser>
        </LowerCard>
      </LowerCardsWrapper>
    </Wrapper>
  )
}

export default ModelIntro