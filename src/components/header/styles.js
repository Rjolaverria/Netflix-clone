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
        ${({ smallViewPort }) => smallViewPort && `background: none;`}
    }
`;

export const Container = styled.div`
    padding: 70px 45px;
    border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
