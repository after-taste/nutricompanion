import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { default as MAvatar } from '@mui/material/Avatar';

import Flex from 'components/Flex/Flex';

// import styles from './Avatar.module.css';

const Avatar = ({ children }) => {
    return (<>
        <Flex
            justifyContent="center"
            alignItems="center">
            <Link href="/user/profile" passHref>
                <MAvatar
                    alt="User Profile"
                    src="/assets/default.webp" />
            </Link>
        </Flex>
    </>);
};

export default Avatar;
