import Link from 'next/link';
import Head from 'next/head';
import Flex from 'components/Flex/Flex';
import Hamburguer from 'components/Menu/Hamburguer';
import Image from 'components/Image/Image';

import styles from './Header.module.css';

const Header = () => {
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
            <Image
                className={styles.profilePicture}
                src="/assets/default.webp"
                width={50}
                height={50} />
        </Flex>
    </>);
};

export default Header;
