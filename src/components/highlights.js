import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { linkBlue } from "../utilities/common-css"
import { Wrapper } from "../utilities/common-styled"

import H1 from "../../static/h-1.png"
import H2 from "../../static/h-2.png"
import H3 from "../../static/h-3.png"

const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 20px;
`

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Image = styled.img`
  width: 30%;
`

const ActivitiesBar = styled.h3`
  height: 38px;
  background-color: #3c3c3c;
  padding: 0 20px;
  line-height: 38px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`

const Link = styled.a`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: .5px;
`

const ActivitiesWrapper = styled.div`
  height: 18rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`

const Activities = styled.div`
  width: 46%;
  height: 6rem;
  overflow-y: hidden;
  margin-bottom: 10px;
`

const ActivitiesTitle = styled.h6`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 700;
`

const ActivitiesDesc = styled.p`
  font-size: 12px;
  line-height: 1.51em;
  margin: 0;
`

const block = css`
  display: block;
`

const Highlights = props => {

  return (
    <Wrapper>
      <Title>News and Event Highlights</Title>
      <ImagesWrapper>
        <Image src={H1} alt="h1" />
        <Image src={H2} alt="h1" />
        <Image src={H3} alt="h1" />
      </ImagesWrapper>
      <ActivitiesBar>
        <span>i-MOS Activities</span>
        <Link href="#">more</Link>
      </ActivitiesBar>
      <ActivitiesWrapper>
        {
          [
            { title: "2017-08-31 16:40:00", desc: "Modeling and Reliability Session on EDTM 2018 Mar. 13-16, Kobe, Japan", link: "Click for details" },
            { title: "2017-03-22 15:17:42", desc: "Please note that we will be performing maintenance on the i-MOS platform on Wednesday, March 22, 2017, from 10 pm - 6 am UTC+08:00. During this time, you may not be able access i-MOS platform." },
            { title: "2016-10-26 15:14:00", desc: <span>New positions available in <i>i</i>-MOS Project.</span>, link: "Click for details (Front-End Web developer)" },
            { title: "2016-07-07 16:56:00", desc: "I-MOS Upgrade: To make the drawing of schematic more convenient,default parameters are loaded automatically to netlist from schematic when \"Convert from schematic\" is click. Saving model parameters to the model library prior to drawing of schematic is optional now!" },
            { title: "2016-06-01 14:54:00", desc: "I-MOS Upgrade: The major upgrade of i-MOS website has been finished. You are welcome to drop any comment for the new i-MOS website." },
            { title: "2016-05-31 15:00:12", desc: "I-MOS Upgrade: i-MOS website will be undergoing a major upgrade from 9:00am-6:00pm on 01 Jun 2016. You will not be able to login during this period of time. We are sorry for any inconvenience caused." },
          ].map(({ title, desc, link }, i) => (
            <Activities key={i}>
              <ActivitiesTitle>{title}</ActivitiesTitle>
              <ActivitiesDesc>
                {desc}
                {link ? <a href="#" css={[linkBlue, block]}>{link}</a> : null}
              </ActivitiesDesc>
            </Activities>
          ))
        }
      </ActivitiesWrapper>
    </Wrapper>
  )
}

export default Highlights