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

const LoginFieldsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const loginField = css`
  width: calc(50% - 5px);
  flex-grow: unset;
`

const buttonCss = css`
  margin-top: 1.5rem;
  align-self: flex-end;
`

const Forget = styled.div`
  margin-top: 1rem;
  border-top: .1px solid #999;
`

const ForgetTitleCss = css`
  margin-top: .5rem;
`

const ForgetDesc = styled.p`
  font-family: Tahoma,sans-serif;
  font-size: 1.2rem;
  color: #666;
`

const Login = props => {

  return (
    <HiddenMenu css={hiddenMenuCss}>
      <div css={flex}>
        <Title>Login</Title>
        <LoginFieldsGroup>
          <input type="text" placeholder="Email" css={[input, loginField]} />
          <input type="text" placeholder="Password" css={[input, loginField]} />
        </LoginFieldsGroup>
        <Button css={buttonCss} onClick={() => props.closeFunc()}>Login</Button>
      </div>
      <Forget css={flex}>
        <Title css={ForgetTitleCss}>Request New Password</Title>
        <ForgetDesc>Please enter your Email address to receive a new password.</ForgetDesc>
        <input type="text" placeholder="Password" css={input} />
        <Button css={buttonCss} onClick={() => props.closeFunc()}>Submit</Button>
      </Forget>
    </HiddenMenu>
  )
}

export default Login