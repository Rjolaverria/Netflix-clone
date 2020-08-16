import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    border-bottom: 0.5rem solid #222;
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
    margin-bottom: 2.5rem;
    padding: 4.4rem 2.8rem;
`;

export const Item = styled.div`
    color: #fff;
    margin-bottom: 10px;
    font-size: 1.625rem;
    font-weight: 400;
    user-select: none;
    align-items: center;

    &:first-of-type {
        margin-top: 3rem;
    }

    div {
        // FIXME
        transition: max-height 0.5s cubic-bezier(0.5, 0, 0.1, 1);
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-bottom: 1px solid #000;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    width: 100%;

    img {
        filter: brightness(0) invert(1);
        width: 2rem;
        height: 2rem;

        @media (max-width: 600px) {
            width: 1rem;
            height: 1rem;
        }
    }

    @media (max-width: 600px) {
        font-size: 1em;
    }
`;

export const Body = styled.div`
    line-height: normal;
    background: #303030;
    padding: ${({ active }) => (active ? '0.8em 1.2em 0.8em 1.2em' : 0)};
    width: 100%;
    height: ${({ active }) => (active ? 'auto' : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};

    @media (max-width: 600px) {
        font-size: 1em;
        line-height: 0.7em;
    }
`;
