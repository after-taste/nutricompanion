import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usePersistedState } from '@dannyman/use-store';
import Flex from 'components/Flex/Flex';
import Text from 'components/Input/Text';
import Button from 'components/Input/Button';
import withLayout from 'hoc/withLayout';
import { signOut } from 'services/firebase/auth';
import { isBrowser } from 'utils';


const Profile = ({ user, ...props }) => {
    const router = useRouter();

    const onSignOutClick = async () => {
        await signOut();
        router.push('/');
    };

    useEffect(() => {
        if (!user) {
            router.push('/user/login');
        }
    }, [user]);

    return (<>
        <Flex>
            <h1>Profile</h1>
            <Flex>
                <Button
                    onClick={onSignOutClick}>
                    <p>Sign Out</p>
                </Button>
            </Flex>
        </Flex>
    </>);
};

// const query = `
// query HomePageQuery($id: String) {}
// `;

export const getServerSideProps = async (context) => {
    // const data = await request({
    //   query: query,
    //   variables: {}
    // });

    return {
        props: {
            // data
        },
    }
};

export default withLayout(Profile);
