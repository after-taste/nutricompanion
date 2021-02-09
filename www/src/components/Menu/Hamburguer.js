import React, { useState, useEffect } from 'react';
import Flex from '@components/Flex/Flex';

import '@styles/components/Menu/Hamburguer.scss';

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    }, [isOpen]);

    return (
        <React.Fragment>
            <Flex
                className="hamburguer-toggle">
                <button
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'x' : '+'}
                </button>
            </Flex>
            {isOpen &&
                <Flex
                    className="hamburguer-container">
                    <h1>Title</h1>
                </Flex>
            }
        </React.Fragment>
    );
};