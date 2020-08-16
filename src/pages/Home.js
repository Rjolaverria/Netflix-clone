import React from 'react';
import JumbotronContainer from '../containers/Jumbotron';
import FooterContainer from '../containers/Footer';
import FaqsContainer from '../containers/Faqs';
import HeaderContainer from '../containers/Header';
import { OptForm, Feature } from '../components';

const Home = () => (
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
                        Ready to watch? Enter your email to create or restart
                        your membership.
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

export default Home;
