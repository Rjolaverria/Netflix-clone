import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/jumbotron';

export const JumbotronContainer = () => {
    return (
        <div>
            <Jumbotron.Container>
                {jumboData.map((i) => (
                    <Jumbotron key={i.id}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{i.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>
                                {i.subTitle}
                            </Jumbotron.SubTitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={i.image} alt={i.alt} />
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))}
            </Jumbotron.Container>
        </div>
    );
};
