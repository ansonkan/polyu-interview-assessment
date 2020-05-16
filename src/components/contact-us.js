import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import HiddenMenu from "./hidden-menu"
import { input } from "../utilities/common-css"
import { Button } from "../utilities/common-styled"

const hiddenMenuCss = css`
  padding: 2rem 4rem;
  max-width: 72rem;
`

const Header = styled.div`
  border-bottom: .1rem solid #666;
  line-height: 3rem;
  font-size: 14px;
`

const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  float: left;
  color: #4d4d4d;
`

const CloseButton = styled.a`
  width: 4rem;
  text-align: right;
  font-size: 2.4rem;
  font-weight: 200;
  float: right;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1.3rem;
  color: #4d4d4d;

  &:hover {
    color: red;
    text-decoration: none;
  }
`

const ClearFloat = styled.div`
  clear: both;
`

const Desc = styled.p`
  font-family: Tahoma,sans-serif;
  padding: 10px 0;
  font-size: 14px;
  color: #666;
  text-align: justify;
`

const MessageTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 1.4rem;
  font-weight: 700;
  float: left;
  color: #4d4d4d;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
`

const Label = styled.label`
  width: 100px;
  font-weight: 700;
  line-height: 34px;
`

const textarea = css`
  height: auto;
  resize: none;
`

const ContactUs = props => {

  return (
    <HiddenMenu css={hiddenMenuCss}>
      <Header>
        <Title>Contact Us</Title>
        <CloseButton onClick={() => props.closeFunc()}>×</CloseButton>
        <ClearFloat />
      </Header>
      <Desc>
        If you have any questions or suggestions concerning the i-MOS platform, you are welcome to contact us. For more general questions concerning compact modeling, you may register as a member and post the messages in the discussion and experience pages.
      </Desc>
      <div>
        <MessageTitle>Send a Message</MessageTitle>
        <ClearFloat />
        <Form>
          {
            [
              { type: "text", label: "Name*", placeholder: "Name" },
              { type: "text", label: "Affiliation", placeholder: "Affiliation" },
              { type: "text", label: "Email*", placeholder: "Email" },
              { type: "text", label: "Subject*", placeholder: "Subject" },
              { type: "textarea", label: "Message*", placeholder: "Message" },
              { type: "submit", label: "Submit" },
            ].map(({ type, label, placeholder }, i) => {
              let elem = null;
              if (type === "text") {
                elem = (
                  <>
                    <Label>{label}</Label>
                    <input type="text" placeholder={placeholder} css={input} />
                  </>
                )
              } else if (type === "textarea") {
                elem = (
                  <>
                    <Label>{label}</Label>
                    <textarea rows="3" placeholder={placeholder} css={[input, textarea]}></textarea>
                  </>
                )
              } else if (type === "submit") {
                elem = (
                  <>
                    <Label></Label>
                    <Button type="submit">Submit</Button>
                  </>
                )
              }

              return (
                <FormGroup key={i}>
                  {elem}
                </FormGroup>
              )
            })
          }
        </Form>
      </div>
    </HiddenMenu>
  )
}

export default ContactUs