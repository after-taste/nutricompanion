import Link from 'next/link';
import Head from 'next/head';
import Flex from 'components/Flex/Flex';
import Hamburguer from 'components/Menu/Hamburguer';
import P from 'components/Text/P';
import Avatar from 'components/Avatar/Avatar';

import styles from './Header.module.css';
import Image from 'components/Image/Image';

const Header = ({ user, theme }) => {
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
            {/* <Hamburguer /> */}
            <Link
                className={styles.mainName}
                href={user ? '/' : '/user/login'}
                passHref
                style={{ width: '100%' }}>
                <Flex
                    flexDirection="row"
                    fullWidth
                    alignItems="center">
                    <Image
                        src={theme?.logo.url}
                        width={50}
                        height={50}
                        objectFit="cover" />
                    <P
                        variant="h6">
                        {theme?.name || "Nutricompanion"}
                    </P>
                </Flex>
            </Link>
            {user &&
                <Avatar
                    sx={{ width: 50, height: 50 }} />
            }
        </Flex>
    </>);
};

export default Header;
