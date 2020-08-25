import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../hooks';
import FirebaseContext from '../context/firebase';
import FooterContainer from '../containers/FooterContainer';
import { Header, Form } from '../components';

import { SIGN_UP, BROWSE } from '../constants/routes';

const SignIn = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useAuth();

    const handleSignin = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(BROWSE);
            })
            .catch((error) => {
                setError(error.message);
                setTimeout(() => setError(''), 5000);
            });
    };

    if (user) {
        return <Redirect to={BROWSE} />;
    }

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
                    <Form.Frame onSubmit={handleSignin}>
                        <Form.Title>Sign In</Form.Title>
                        {error && <Form.Error>{error}</Form.Error>}
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
                            disabled={!password | !email}
                            type='submit'
                        >
                            Sign In
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix?{' '}
                            <Form.Link to={SIGN_UP}>Sign up now</Form.Link>.
                        </Form.Text>
                        <Form.Disclaimer>
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot.
                        </Form.Disclaimer>
                    </Form.Frame>
                </Form>
            </Header>
            <FooterContainer small />
        </>
    );
};

export default SignIn;
