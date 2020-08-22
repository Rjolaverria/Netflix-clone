import React from 'react';
import { Spinner, Picture, LockBody, ReleaseBody } from './styles';

const Loading = ({ src, ...restProps }) => (
    <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
);

Loading.ReleaseBody = () => <ReleaseBody />;

export default Loading;
