import React from 'react';
import Flex from '@components/Flex/Flex';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

import '@styles/components/Layout/Layout.scss';

export default ({ children }) => {
    return (
        <React.Fragment>
            <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <Flex
                className="main-layout"
                justifyContent="center">
                <Flex
                    className="main-wrapper"
                    flexDirection="column"
                    maxWidth={1116}
                    minWidth={320}
                    padding="15px">
                    <Header />
                    <Flex
                        flexDirection="column">
                        {children}
                    </Flex>
                    <Footer />
                </Flex>
            </Flex>
        </React.Fragment>
    );
};