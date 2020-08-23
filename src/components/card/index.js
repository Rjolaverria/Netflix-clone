import React, { createContext, useContext, useState } from 'react';
import {
    Container,
    Group,
    Title,
    Entities,
    Item,
    Image,
    Meta,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
} from './styles';

const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false);

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
};

Card.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
);

Card.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Card.Entities = ({ children, ...restProps }) => (
    <Entities {...restProps}>{children}</Entities>
);

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};

Card.Image = ({ ...restProps }) => <Image {...restProps} />;

Card.Meta = ({ children, ...restProps }) => (
    <Meta {...restProps}>{children}</Meta>
);

Card.SubTitle = ({ children, ...restProps }) => (
    <SubTitle {...restProps}>{children}</SubTitle>
);

Card.Text = ({ children, ...restProps }) => (
    <Text {...restProps}>{children}</Text>
);

Card.Feature = function CardFeature({ category, children, ...restProps }) {
    const { itemFeature, showFeature, setShowFeature } = useContext(
        FeatureContext
    );

    return (
        showFeature && (
            <Feature
                src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
            >
                <Content>
                    <FeatureTitle>{itemFeature.title}</FeatureTitle>
                    <FeatureText>{itemFeature.description}</FeatureText>
                    <FeatureClose onClick={() => setShowFeature(false)}>
                        <img src='/images/icons/close.png' alt='Close' />
                    </FeatureClose>

                    <Group
                        margin='30px 0'
                        flexDirection='row'
                        alignItems='center'
                    >
                        <Maturity rating={itemFeature.maturity}>
                            {itemFeature.maturity < 12
                                ? 'PG'
                                : itemFeature.maturity}
                        </Maturity>
                        <FeatureText fontWeight='bold'>
                            {itemFeature.genre.charAt(0).toUpperCase() +
                                itemFeature.genre.slice(1)}
                        </FeatureText>
                    </Group>
                    {children}
                </Content>
            </Feature>
        )
    );
};

export default Card;
