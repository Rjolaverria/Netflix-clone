import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 4.687rem 0;
    max-width: 1000px;
    color: #fff;
    text-align: center;
`;

export const Title = styled.h1`
    margin: 0 auto;
    line-height: 1.1;
    font-size: 4rem;
    max-width: 800px;

    @media (max-width: 740px) {
        font-size: 3.125rem;
        max-width: 640px;
    }
`;

export const SubTitle = styled.h2`
    margin: 1rem auto;
    font-size: 1.625rem;
    font-weight: normal;
`;
