import React from 'react';
import data from '../fixtures/jumbotron.json';
import { Jumbotron } from '../components';

const JumbotronContainer = () => (
    <Jumbotron.Container>
        {data.map((i) => (
            <Jumbotron key={i.id} direction={i.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{i.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{i.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={i.image} alt={i.alt} />
                </Jumbotron.Pane>
            </Jumbotron>
        ))}
    </Jumbotron.Container>
);

export default JumbotronContainer;
