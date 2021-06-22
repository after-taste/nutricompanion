import Link from 'next/link';
import Flex from 'components/Flex/Flex';
import Hamburguer from 'components/Menu/Hamburguer';

import styles from './Header.module.css';

const Header = () => {
    return (<>
        <Flex
            className={styles.headerContainer}
            flexDirection="row"
            alignItems="center">
            <Hamburguer />
            <Link href="/" passHref>
                <h1>Nutricompanion</h1>
            </Link>
        </Flex>
    </>);
};

export default Header;
