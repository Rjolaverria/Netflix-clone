import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-top: 1.2rem;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    width: 100%;
    max-width: 450px;
    padding: 0.63rem;
    height: 60px;
    box-sizing: border-box;
    font-size: 1rem;
    border: solid 1px #8c8c8c;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #e50914;
    border: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.625rem;
    padding: 0 1.625rem;

    &:hover {
        background: #f40612;
    }

    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
        border-radius: 2px;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 16px;

        @media (max-width: 1000px) {
            width: 12px;
        }
    }
`;

export const Text = styled.p`
    font-size: 19px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 1rem;
        line-height: 22px;
    }
`;
