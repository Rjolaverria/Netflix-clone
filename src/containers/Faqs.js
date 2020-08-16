import React from 'react';
import { Accordion } from '../components';
import data from '../fixtures/faqs.json';

const FaqsContainer = () => (
    <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {data.map((i, index) => (
            <Accordion.Item key={i.id}>
                <Accordion.Header index={index}>{i.header}</Accordion.Header>
                <Accordion.Body index={index}>{i.body}</Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
);

export default FaqsContainer;
