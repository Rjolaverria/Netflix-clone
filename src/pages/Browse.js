import React from 'react';
import BrowseContainer from '../containers/BrowseContainer';
import { useContent } from '../hooks';
import { genreMap } from '../utils';

const Browse = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const data = genreMap(series, films);
    console.log(data);
    return <BrowseContainer />;
};

export default Browse;
