import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 3.75rem 4.25rem 2.5rem;
    margin-bottom: 6.25rem;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.75rem;
    margin-top: 0;
`;

export const Text = styled.p`
    color: #737373;
    font-weight: 500;
`;

export const SmallText = styled.p`
    margin-top: 0.625rem;
    font-size: 0.8125rem;
    line-height: normal;
    color: #8c8c8c;
`;

export const Link = styled(RouterLink)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 0.875rem;
    margin: 0 0 1rem;
    color: white;
    padding: 1rem 1.25rem;
`;

export const Frame = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 1rem;
    height: 3.125rem;
    line-height: 3.125rem;
    padding: 0 1.25rem;
    margin-bottom: 1.25rem;

    &:last-of-type {
        margin-bottom: 1.875rem;
    }
`;

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 12px;
    padding: 1rem;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;
