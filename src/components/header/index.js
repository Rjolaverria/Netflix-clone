import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Frame,
    Group,
    Background,
    Logo,
    ButtonLink,
    Link,
    Text,
    Feature,
    FeatureHeading,
    PlayButton,
} from './styles';

const Header = ({ bg = true, children, ...restProps }) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Container = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Header.Frame = ({ children, ...restProps }) => (
    <Frame {...restProps}>{children}</Frame>
);

Header.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
);

Header.Logo = ({ to, ...restProps }) => (
    <RouterLink to={to}>
        <Logo {...restProps} />
    </RouterLink>
);

Header.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

Header.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

Header.ButtonLink = ({ children, ...restProps }) => (
    <ButtonLink {...restProps}>{children}</ButtonLink>
);

Header.Feature = ({ children, ...restProps }) => (
    <Feature {...restProps}>{children}</Feature>
);

Header.FeatureHeading = ({ children, ...restProps }) => (
    <FeatureHeading {...restProps}>{children}</FeatureHeading>
);

Header.PlayButton = ({ children, ...restProps }) => (
    <PlayButton {...restProps}>{children}</PlayButton>
);

export default Header;
