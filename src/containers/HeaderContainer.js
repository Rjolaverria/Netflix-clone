import React from 'react';
import { Header } from '../components';
import { HOME, SIGN_IN } from '../constants/routes';

const HeaderContainer = ({ children }) => (
    <Header>
        <Header.Frame>
            <Header.Logo to={HOME} src='/images/misc/logo.svg' alt='Netflix' />
            <Header.ButtonLink to={SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        <Header.Container>{children}</Header.Container>
    </Header>
);

export default HeaderContainer;
