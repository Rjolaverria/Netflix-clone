import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Button, Close } from './styles';

import { LockBody, ReleaseBody } from '../loading/styles';

const PlayerContext = createContext();

const Player = ({ children, ...restProps }) => {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
};

Player.Video = function PlayerVideo() {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer ? (
        ReactDOM.createPortal(
            <Overlay>
                <LockBody />
                <Inner>
                    <video id='video-player' controls autoPlay>
                        <source src='/videos/bunny.mp4' type='video/mp4' />
                    </video>
                </Inner>
                <Close onClick={() => setShowPlayer(false)} />
            </Overlay>,
            document.body
        )
    ) : (
        <ReleaseBody />
    );
};

Player.Button = function PlayerButton() {
    const { setShowPlayer } = useContext(PlayerContext);

    return <Button onClick={() => setShowPlayer(true)}>Play</Button>;
};

export default Player;
