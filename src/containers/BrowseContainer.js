import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import ProfileContainer from './ProfileContainer';
import FooterContainer from './FooterContainer';

const BrowseContainer = () => {
    const [profile, setProfile] = useState({});

    const user = {
        displayName: 'Karl',
        photoURL: '1',
    };

    return profile.displayName ? (
        <>
            <p>Browse Container</p>
            <FooterContainer />
        </>
    ) : (
        <ProfileContainer />
    );
};

export default BrowseContainer;
