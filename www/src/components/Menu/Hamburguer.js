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
                className={`hamburguer-toggle ${isOpen && 'open'}`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'x' : '+'}
                </button>
            </Flex>
            {isOpen &&
                <Flex
                    className="hamburguer-container"
                    flexDirection="column">
                    <h1>Title</h1>
                    <ul>
                        <li>Page 1</li>
                        <li>Page 2</li>
                        <li>Page 3</li>
                        <li>Page 4</li>
                        <li>Page 5</li>
                    </ul>
                </Flex>
            }
        </React.Fragment>
    );
};