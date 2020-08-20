import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import FooterContainer from '../containers/FooterContainer';
import { Header, Form } from '../components';
import { SIGN_IN, BROWSE } from '../constants/routes';

const SignUp = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: name,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        setEmail('');
                        setPassword('');
                        setError('');
                        history.push(BROWSE);
                    })
            )
            .catch((error) => {
                setError(error.message);
                setTimeout(() => setError(''), 5000);
            });
    };

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
            <FooterContainer small />
        </>
    );
};

export default SignUp;
