import Link from 'next/link';
import { default as MAvatar } from '@mui/material/Avatar';

import Flex from 'components/Flex/Flex';

// import styles from './Avatar.module.css';

const Avatar = ({
    children,
    imageUrl = '/assets/default.webp',
    ...props
}) => {
    return (<>
        <Flex
            justifyContent="center"
            alignItems="center">
            <Link href="/user/profile" passHref>
                <MAvatar
                    alt="User Profile"
                    src={imageUrl}
                    {...props} />
            </Link>
        </Flex>
    </>);
};

export default Avatar;
