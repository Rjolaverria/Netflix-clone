import React, { useState } from 'react';
import FooterContainer from '../containers/FooterContainer';
import { Header, Form } from '../components';
import { SIGN_IN } from '../constants/routes';

const SignUp = () => {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => e.preventDefault();

    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Logo
                        to='/'
                        src='/images/misc/logo.svg'
                        alt='Netflix'
                    />
                </Header.Frame>
                <Form>
                    <Form.Frame onSubmit={handleSignUp}>
                        <Form.Title>Sign Up</Form.Title>
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Input
                            value={name}
                            placeholder='Full Name'
                            onChange={({ target }) => setName(target.value)}
                        />
                        <Form.Input
                            type='email'
                            value={email}
                            placeholder='Email Address'
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type='password'
                            value={password}
                            placeholder='Password'
                            autocomplete='off'
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit
                            disabled={!password || !email || !name}
                            type='submit'
                        >
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already have an account?{' '}
                            <Form.Link to={SIGN_IN}>Sign In</Form.Link>.
                        </Form.Text>
                        <Form.Disclaimer>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot.
                        </Form.Disclaimer>
                    </Form.Frame>
                </Form>
            </Header>
            <FooterContainer />
        </>
    );
};

export default SignUp;
