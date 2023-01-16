import Link from 'next/link';
import Head from 'next/head';
import Flex from 'components/Flex/Flex';
import Hamburguer from 'components/Menu/Hamburguer';
import Avatar from 'components/Avatar/Avatar';

import styles from './Header.module.css';

const Header = ({ theme }) => {
    return (<>
        <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <Flex
            className={styles.headerContainer}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor={theme?.primaryColor?.hex}>
            <Hamburguer />
            <Flex
                fullWidth>
                <Link
                    className={styles.mainName}
                    href="/"
                    passHref>
                    <h1>
                        {theme?.name || "Nutricompanion"}
                    </h1>
                </Link>
            </Flex>
            <Avatar
                sx={{ width: 50, height: 50 }} />
        </Flex>
    </>);
};

export default Header;
