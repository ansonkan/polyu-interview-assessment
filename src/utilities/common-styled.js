import styled from "@emotion/styled"

const Button = styled.button`
  color: #333;
  background-color: #fff;
  width: 7.2rem;
  font-weight: 400;
  touch-action: manipulation;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 6px 12px;

  &:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
`

const Wrapper = styled.div`
  width: 100%;
  padding: 80px 8% 20px 8%;
`

export {
  Button, 
  Wrapper
}