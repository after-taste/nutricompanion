import React from 'react';
import Flex from '@components/Flex/Flex';
import Hamburguer from '@components/Menu/Hamburguer';

export default () => {
    return (
        <React.Fragment>
            <Flex>
                <Hamburguer />
                <h1>Nutricompanion</h1>
            </Flex>
        </React.Fragment>
    );
};