import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.125rem;
    box-sizing: border-box;

    > h2 {
        @media (max-width: 1000px) {
            margin-left: 1.875rem;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Group = styled.section`
    display: flex;
    flex-direction: ${({ flexDirection }) =>
        flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: #e5e5e5;
    font-weight: bold;
    margin-left: 3.5rem;
    margin-right: 3.5rem;
    margin-top: 0;
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform 0.2;

    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }

    @media (min-width: 1000px) {
        &:hover > div,
        &:hover p,
        &:hover h4 {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 3.5rem;

        @media (max-width: 1000px) {
            margin-left: 1.875rem;
        }
    }

    &:last-of-type {
        margin-right: 3.5rem;

        @media (max-width: 1000px) {
            margin-right: 1.875rem;
        }
    }
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 305px;
    cursor: pointer;
    height: auto;
    padding: 0;
    margin: 0;
`;

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 0.625rem;
    background-color: #0000008f;
`;

export const SubTitle = styled.h4`
    font-size: 0.75rem;
    color: white;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`;

export const Text = styled.p`
    margin-top: 5px;
    font-size: 0.625rem;
    color: white;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;
    z-index: 101;

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;

        h2 {
            font-size: 1.25rem;
            line-height: 1.25rem;
            margin-bottom: 0.625rem;
        }
        p {
            font-size: 0.875rem;
        }
    }
`;

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`;

export const FeatureText = styled.p`
    font-size: 1.125rem;
    color: white;
    font-weight: ${({ fontWeight }) =>
        fontWeight === 'bold' ? 'bold' : 'normal'};
    margin: 0;

    @media (max-width: 800px) {
        line-height: 22px;
    }
`;

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        height: 24px;
    }
`;

export const Content = styled.div`
    margin: 3.5rem;
    max-width: 500px;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 1.875rem;
        max-width: none;
    }
`;

export const Maturity = styled.div`
    background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
    border-radius: 15px;
    width: 1.25rem;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 0.625rem;
    font-size: 0.75rem;
`;
