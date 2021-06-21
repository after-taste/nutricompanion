import React from 'react';
import Flex from '@components/Flex/Flex';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

import '@styles/variables.scss';
import '@styles/mixins.scss';
import '@styles/global.scss';

import '@components/Layout/Basic.scss';

export default ({ children }) => {
    return (
        <React.Fragment>
            <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <Flex
                className="main-layout"
                justifyContent="center">
                <Flex
                    className="main-wrapper"
                    flexDirection="column">
                    <Header />
                    <Banner />
                    <Flex
                        className="content"
                        flexDirection="column">
                        {children}
                    </Flex>
                    <Footer />
                </Flex>
            </Flex>
        </React.Fragment>
    );
};