import React, { useState } from 'react';
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
    Search,
    SearchIcon,
    SearchInput,
    Profile,
    Dropdown,
    Picture,
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

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restProps
}) {
    const [active, setActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setActive(!active)}>
                <img src='/images/icons/search.png' alt='Search' />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder='Search files and series'
                active={active}
            />
        </Search>
    );
};

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

Header.Profile = ({ children, ...restProps }) => (
    <Profile {...restProps}>{children}</Profile>
);

Header.Picture = ({ src, ...restProps }) => (
    <Picture {...restProps} src={`/images/users/${src}.png`} />
);

Header.Dropdown = ({ children, ...restProps }) => (
    <Dropdown {...restProps}>{children}</Dropdown>
);

export default Header;
