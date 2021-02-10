import React from 'react';
import { Link } from 'gatsby';
import Flex from '@components/Flex/Flex';
import Hamburguer from '@components/Menu/Hamburguer';

import '@styles/components/Header/Header.scss';

export default () => {
    return (
        <React.Fragment>
            <Flex
                className="header-container"
                alignItems="center">
                <Hamburguer />
                <Link to="/">
                    <h1>Nutricompanion</h1>
                </Link>
            </Flex>
        </React.Fragment>
    );
};