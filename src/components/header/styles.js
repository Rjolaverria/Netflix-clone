import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const backgroundHelper = (src) =>
    src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.2) 0,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.4) 100%
        ),
        url(${({ src }) => backgroundHelper(src)}) top left / cover no-repeat;
    @media (max-width: 1100px) {
        ${({ smallViewPortHide }) => smallViewPortHide && `background: none;`}
    }
`;

export const Container = styled.div`
    padding: 70px 45px;
    border-bottom: 8px solid #222;
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Frame = styled(Group)`
    justify-content: space-between;
    height: 4rem;
    margin: 0 3.5rem;
    padding: 1.125rem 0 0 0;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 1.875rem;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 2.5rem;

    @media (max-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
    margin-right: 1.875rem;
    font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(RouterLink)`
    background-color: #e50914;
    width: 5.25rem;
    height: fit-content;
    color: #fff;
    border: 0;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 3px;
    padding: 0.5rem 1.1rem;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #f40612;
    }
`;

export const Text = styled.p`
    color: #fff;
    font-size: 1.375rem;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Feature = styled(Frame)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const FeatureHeading = styled.h2`
    color: #fff;
    font-size: 3.125rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    border: 0;
    padding: 0.625rem 1.25rem;
    border-radius: 4px;
    max-width: 130px;
    font-weight: bold;
    font-size: 1.25rem;
    margin-top: 0.625rem;
    cursor: pointer;
    transition: background 0.5s ease;

    &:hover {
        background: #ff1e1e;
        color: #fff;
    }
`;

export const Search = styled(Group)`
    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background: transparent;
    border: 0;

    &:focus {
        outline: 0;
    }

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const SearchInput = styled.input`
    background-color: #444459;
    color: #fff;
    border: 1px solid #fff;
    transition: width 0.5s;
    height: 30px;
    font-size: 0.875rem;
    margin-left: ${({ active }) => (active === true ? '.625rem' : '0')};
    padding: ${({ active }) => (active === true ? '0 .625rem' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;

    &:focus {
        outline: 0;
    }
`;

export const Profile = styled(Group)`
    margin-left: 1.25rem;
    position: relative;

    &:hover > div {
        display: flex;
        flex-direction: column;
    }
`;

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: #000;
    top: 32px;
    right: 1px;
    width: 100px;
    padding: 0.625rem;

    ${Group} {
        margin-bottom: 0.625rem;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link}, ${Picture} {
            cursor: default;
        }
    }

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    button {
        margin-right: 0.625rem;
    }
`;
