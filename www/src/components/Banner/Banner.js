import React from 'react';
import { useSessionState } from '@dannyman/use-store';
import Flex from '@components/Flex/Flex';

import '@styles/components/Banner/Banner.scss';

export default () => {
    const [hide, setHide] = useSessionState('nc:global:banner', false);

    return !hide && (
        <React.Fragment>
            <Flex
                className="banner-container"
                alignItems="center"
                justifyContent="space-evenly">
                <p>Something important</p>
                <button
                    onClick={() => setHide(true)}>
                    x
                </button>
            </Flex>
        </React.Fragment>
    );
};