import React from 'react';
import { Accordion, OptForm } from '../components';
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
        <OptForm>
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership.
            </OptForm.Text>
            <OptForm.Input placeholder='Email Address' />
            <OptForm.Button>Try 30 days free</OptForm.Button>
        </OptForm>
    </Accordion>
);

export default FaqsContainer;
