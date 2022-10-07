import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElement'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">muzzica</Icon>
            <FormContent>
                <Form>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email'></FormInput>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password'></FormInput>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container> 
    </>
  )
}

export default SignIn