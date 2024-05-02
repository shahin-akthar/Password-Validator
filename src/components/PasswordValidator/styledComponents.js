// Style your elements here

import styled from 'styled-components'

export const DivContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  background-size: cover;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const CardContainer = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 35px;
  padding-bottom: 35px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 10px;
  color: #edeeff;
`

export const Heading = styled.h1`
  font-size: 35px;
  font-weight: 600;
  font-family: 'Roboto';
`

export const Para = styled.p`
  font-size: 18px;
  font-weight: 500;
`

export const Input = styled.input`
  border: none;
  padding: 10px;
  width: 80%;
`

export const Error = styled.p`
  color: red;
  font-size: 20px;
  font-weight: 500;
`
