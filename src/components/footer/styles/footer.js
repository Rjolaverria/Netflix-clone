import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 900px;
    flex-direction: column;
    padding: 3rem 3.5rem;
    margin: auto;

    @media (max-width: 600px) {
        padding: 4.3rem 2rem;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;

    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Link = styled.a`
    color: #757575;
    text-decoration: none;
    font-size: 0.8rem;
    margin-bottom: 1rem;
`;

export const Title = styled.p`
    color: #757575;
    margin-bottom: 2rem;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 2rem;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;
