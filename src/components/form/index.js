import React from 'react';
import {
    Container,
    Frame,
    Title,
    Text,
    Disclaimer,
    Error,
    Link,
    Input,
    Submit,
} from './styles';

const Form = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

Form.Frame = ({ children, ...restProps }) => (
    <Frame {...restProps}>{children}</Frame>
);

Form.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Form.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

Form.Disclaimer = ({ children, ...restProps }) => (
    <Disclaimer {...restProps}>{children}</Disclaimer>
);

Form.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

Form.Error = ({ children, ...restProps }) => (
    <Error {...restProps}>{children}</Error>
);

Form.Input = ({ children, ...restProps }) => <Input {...restProps} />;

Form.Submit = ({ children, ...restProps }) => (
    <Submit {...restProps}>{children}</Submit>
);

export default Form;
