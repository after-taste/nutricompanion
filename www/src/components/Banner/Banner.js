import React, { useState } from 'react';
import Flex from '@components/Flex/Flex';

import '@styles/components/Banner/Banner.scss';

export default () => {
    const [show, setShow] = useState(true);

    return show && (
        <React.Fragment>
            <Flex
                className="banner-container"
                alignItems="center"
                justifyContent="space-evenly">
                <p>Something important</p>
                <button
                    onClick={() => setShow(false)}>
                    x
                </button>
            </Flex>
        </React.Fragment>
    );
};