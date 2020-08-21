import React from 'react';
import { Header, Profiles } from '../components';
import { HOME } from '../constants/routes';

const ProfileContainer = ({ user: { displayName, photoURL }, setProfile }) => (
    <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo
                    to={HOME}
                    src='/images/misc/logo.svg'
                    alt='Netflix'
                />
            </Header.Frame>
        </Header>
        <Profiles>
            <Profiles.Title> Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User
                    onClick={() =>
                        setProfile({
                            displayName,
                            photoURL,
                        })
                    }
                >
                    <Profiles.Picture src={1} />
                    <Profiles.Name>Rafi</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>
);

export default ProfileContainer;
