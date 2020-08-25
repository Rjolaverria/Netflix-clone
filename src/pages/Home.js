import React from 'react';
import JumbotronContainer from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import FaqsContainer from '../containers/FaqsContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { OptForm, Feature } from '../components';
import { useAuth } from '../hooks';
import { BROWSE } from '../constants/routes';
import { Redirect } from 'react-router-dom';

const Home = () => {
    const { user } = useAuth();

    if (user) {
        return <Redirect to={BROWSE} />;
    }

    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </OptForm.Text>
                        <OptForm.Input placeholder='Email Address' />
                        <OptForm.Button>Try 30 days free</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};

export default Home;
