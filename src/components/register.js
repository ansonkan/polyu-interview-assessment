import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import HiddenMenu from "./hidden-menu"
import { input } from "../utilities/common-css"
import { Button } from "../utilities/common-styled"

const hiddenMenuCss = css`
  right: 0;
  padding: 2rem 3rem;
  width: 43rem;
`

const flex = css`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 1.4rem;
  line-height: 3rem;
  font-weight: 700;
  color: #4d4d4d;
`

const SubTitle = styled.h2`
  font-size: 1.3rem;
  line-height: 3rem;
  font-weight: 400;
  color: #666;
`

const Desc = styled.p`
  line-height: 1rem;
  font-family: Tahoma,sans-serif;
  font-size: 1rem;
  color: #666;
`

const HorizontalFieldsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const horizontalfield = css`
  width: calc(50% - 5px);
  flex-grow: unset;
`

const marginBottom = css`
  margin-bottom: 1rem;
`

const registerBtn = css`
  width: auto;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;

  &:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }
`

const Register = props => {

  return (
    <HiddenMenu css={hiddenMenuCss}>
      <form css={flex}>
        <Title>Registration</Title>
        <SubTitle>Personal information</SubTitle>
        <HorizontalFieldsGroup css={marginBottom}>
          <input type="text" placeholder="First Name*" css={[input, horizontalfield]} />
          <input type="text" placeholder="Last Name*" css={[input, horizontalfield]} />
        </HorizontalFieldsGroup>
        {
          [
            "Display Name*", 
            "Company*", 
            "Position Title", 
            "Address"
          ].map((x, i) => <input key={i} type="text" placeholder={x} css={[input, marginBottom]} />)
        }
        <HorizontalFieldsGroup css={marginBottom}>
          <input type="text" placeholder="Telephone" css={[input, horizontalfield]} />
          <input type="text" placeholder="Fax" css={[input, horizontalfield]} />
        </HorizontalFieldsGroup>
        <SubTitle>Account information</SubTitle>
        <input type="text" placeholder="Email Address*" css={[input, marginBottom]} />
        <Desc>The EMAIL ADDRESS is for log-in use. Please make sure the EMAIL ADDRESS is correct.</Desc>
        {
          [
            "Password*", 
            "Retype Password*", 
          ].map((x, i) => <input key={i} type="text" placeholder={x} css={[input, marginBottom]} />)
        }
        <Desc>At least 6 charaters or numbers are required.</Desc>
        <Button css={registerBtn} onClick={() => props.closeFunc()}>Register</Button>
      </form>
    </HiddenMenu>
  )
}

export default Register