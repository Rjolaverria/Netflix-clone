import React from 'react';
import { Container, Title, List, User, Picture, Name } from './styles';

const Profiles = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Profiles.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Profiles.List = ({ children, ...restProps }) => (
    <List {...restProps}>{children}</List>
);

Profiles.User = ({ children, ...restProps }) => (
    <User {...restProps}>{children}</User>
);

Profiles.Picture = ({ src, ...restProps }) => (
    <Picture
        {...restProps}
        src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    />
);

Profiles.Name = ({ children, ...restProps }) => (
    <Name {...restProps}>{children}</Name>
);

export default Profiles;
