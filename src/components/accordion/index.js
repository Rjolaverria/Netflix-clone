import React, { useState, useContext, createContext } from 'react';
import {
    Container,
    Inner,
    Item,
    Header,
    Title,
    Body,
} from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <ToggleContext.Provider value={{ activeIndex, setActiveIndex }}>
            <Container {...restProps}>
                <Inner>{children}</Inner>
            </Container>
        </ToggleContext.Provider>
    );
};

Accordion.Item = ({ children, ...restProps }) => (
    <Item {...restProps}>{children}</Item>
);

Accordion.Header = function AccordionHeader({ children, index, ...restProps }) {
    const { activeIndex, setActiveIndex } = useContext(ToggleContext);
    const handleClick = () => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <Header onClick={handleClick} {...restProps}>
            {children}
            {activeIndex === index ? (
                <img src='/images/icons/close-slim.png' alt='Close' />
            ) : (
                <img src='/images/icons/add.png' alt='Open' />
            )}
        </Header>
    );
};
Accordion.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);
Accordion.Body = function AccordionBody({ children, index, ...restProps }) {
    const { activeIndex } = useContext(ToggleContext);
    const active = activeIndex === index;
    return (
        <Body active={active} {...restProps}>
            {children}
        </Body>
    );
};

export default Accordion;
