import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Frame, Background, Logo, ButtonLink } from './styles';

const Header = ({ bg = true, children, ...restProps }) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Container = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Header.Frame = ({ children, ...restProps }) => (
    <Frame {...restProps}>{children}</Frame>
);

Header.Logo = ({ to, ...restProps }) => (
    <RouterLink to={to}>
        <Logo {...restProps} />
    </RouterLink>
);

Header.ButtonLink = ({ children, ...restProps }) => (
    <ButtonLink {...restProps}>{children}</ButtonLink>
);

export default Header;
