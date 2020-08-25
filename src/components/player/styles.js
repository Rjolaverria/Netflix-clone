import styled from 'styled-components';

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 105;
`;

export const Inner = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`;
export const Button = styled.button`
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`;

export const Close = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    opacity: 1;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:before,
    &:after {
        position: absolute;
        left: 10px;
        top: 0;
        content: ' ';
        height: 30px;
        width: 3px;
        background-color: white;
        transform: rotate(-45deg);
    }

    &:after {
        transform: rotate(45deg);
    }

    &:hover {
        transform: scale(1.2);
    }
`;
