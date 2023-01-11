import Link from 'next/link';
import Head from 'next/head';
import Flex from 'components/Flex/Flex';
import Hamburguer from 'components/Menu/Hamburguer';
import Image from 'components/Image/Image';
import Avatar from 'components/Avatar/Avatar';

import styles from './Header.module.css';

const Header = () => {
    return (<>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <Flex
            className={styles.headerContainer}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Hamburguer />
            <Link href="/" passHref>
                <h1>Nutricompanion</h1>
            </Link>
            <Avatar />
        </Flex>
    </>);
};

export default Header;
