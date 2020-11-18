import React, { useState, useContext, useEffect } from 'react';
import Fuse from 'fuse.js';
import { Header, Loading, Card, Player } from '../components';
import { HOME, SIGN_IN } from '../constants/routes';
import FirebaseContext from '../context/firebase';
import ProfileContainer from './ProfileContainer';
import FooterContainer from './FooterContainer';
import { useAuth } from '../hooks';
import { Redirect } from 'react-router-dom';

const BrowseContainer = ({ data }) => {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useAuth();
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        setDataRows(data[category]);
    }, [data, category]);

    useEffect(() => {
        const fuse = new Fuse(dataRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (
            dataRows.length > 0 &&
            searchTerm.length > 3 &&
            results.length > 0
        ) {
            setDataRows(results);
        } else {
            setDataRows(data[category]);
        }
        // eslint-disable-next-line
    }, [searchTerm]);

    if (!user) {
        return <Redirect to={SIGN_IN} />;
    }

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src='joker1' smallViewPortHide>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo
                            to={HOME}
                            src='/images/misc/logo.svg'
                            alt='Netflix'
                        />
                        <Header.Link
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.Link>
                        <Header.Link
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Link>
                                        {user.displayName}
                                    </Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link
                                        onClick={() =>
                                            firebase.auth().signOut()
                                        }
                                    >
                                        Sign Out
                                    </Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureHeading>
                        Watch Joker Now
                    </Header.FeatureHeading>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {dataRows.map((dataItem) => (
                    <Card key={`${category}-${dataItem.title.toLowerCase()}`}>
                        <Card.Title>{dataItem.title}</Card.Title>
                        <Card.Entities>
                            {dataItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image
                                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                    />
                                    <Card.Meta>
                                        <Card.SubTitle>
                                            {item.title}
                                        </Card.SubTitle>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Video />
                                <Player.Button />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer />
        </>
    ) : (
        <ProfileContainer user={user} setProfile={setProfile} />
    );
};

export default BrowseContainer;
