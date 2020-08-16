import React from 'react';
import { Container, Input, Button, Text } from './styles';

const OptForm = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
);

OptForm.Input = ({ children, ...restProps }) => <Input {...restProps} />;

OptForm.Button = ({ children, ...restProps }) => (
    <Button {...restProps}>
        {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </Button>
);

OptForm.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);
export default OptForm;
