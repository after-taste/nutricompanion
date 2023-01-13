import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Flex from 'components/Flex/Flex';
import styles from './Hamburguer.module.css';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    }, [isOpen]);

    return (<>
        <Flex
            className={isOpen ? [styles.hamburgerToggle, styles.open] : styles.hamburgerToggle}
            flexDirection="row">
            <button
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ?
                    <MenuOpenIcon />
                    :
                    <MenuIcon />
                }
            </button>
        </Flex>
        {isOpen &&
            <Flex
                className={styles.hamburguerContainer}
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
    </>);
};

export default Hamburger;
