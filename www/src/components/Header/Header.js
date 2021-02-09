import React from 'react';
import Flex from '@components/Flex/Flex';
import Hamburguer from '@components/Menu/Hamburguer';

import '@styles/components/Header/Header.scss';

export default () => {
    return (
        <React.Fragment>
            <Flex
                className="header-container">
                <Hamburguer />
                <h1>Nutricompanion</h1>
            </Flex>
        </React.Fragment>
    );
};