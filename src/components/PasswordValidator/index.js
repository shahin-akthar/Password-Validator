// Write your code here

import {useState} from 'react'
import {
  DivContainer,
  CardContainer,
  Heading,
  Para,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, getInput] = useState('')

  const getUserInput = event => {
    getInput(event.target.value)
  }

  return (
    <DivContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={userInput} onChange={getUserInput} />
        {userInput.length < 8 && (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </CardContainer>
    </DivContainer>
  )
}

export default PasswordValidator
