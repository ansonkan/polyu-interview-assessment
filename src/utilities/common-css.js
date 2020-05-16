import { css } from "@emotion/core"

const input = css`
  flex-grow: 1;
  height: 34px;
  padding: 6px 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }
`

const linkBlue = css`
  color: #35a9dd;
`

export {
  input, 
  linkBlue
}