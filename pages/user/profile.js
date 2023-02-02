import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usePersistedState } from '@dannyman/use-store';
import Flex from 'components/Flex/Flex';
import P from 'components/Text/P';
import Button from 'components/Input/Button';
import withLayout from 'hoc/withLayout';
import { signOut, updateUser, updateUserEmail } from 'services/firebase/auth';
import Text from 'components/Input/Text';

import styles from './profile.module.css';
import { isTheSameObject } from 'utils';

const copy = {
    displayNameLabel: 'Nombre',
    displayNameHelperText: 'Ingrese su nombre',
    emailLabel: 'Email',
    emailHelperText: 'Ingrese su correo electrónico',
};

const Profile = ({ user, ...props }) => {
    const router = useRouter();

    const [_user, set_User] = useState(null);

    const onSignOutClick = async () => {
        await signOut();
        router.push('/user/login');
    };

    const handleInput = (field, value) => {
        set_User({
            ..._user,
            [field]: value
        });
    };

    const onUpdateClick = async () => {
        if (_user.displayName !== user.displayName) {
            await updateUser({
                displayName: _user.displayName
            });
        }

        if (_user.photoURL !== user.photoURL) {
            await updateUser({
                photoURL: _user.photoURL
            });
        }

        if (_user?.email !== user.email) {
            await updateUserEmail(_user.email);
        }
    };

    useEffect(() => {
        if (user) {
            set_User(user);
        }
    }, [user]);

    return (<>
        <Flex>
            <P
                variant="h2">
                Mi Perfíl
            </P>
            <Flex>
                <Text
                    key="display-name-input"
                    label={copy.displayNameLabel}
                    helperText={copy.displayNameHelperText}
                    value={_user?.displayName || ''}
                    onChange={(v) => handleInput('displayName', v)} />
                {/* <Text
                    key="email-input"
                    label={copy.emailLabel}
                    helperText={copy.emailHelperText}
                    onChange={(v) => handleInput('email', v)} /> */}
            </Flex>
            <Button
                className={styles.button}
                onClick={onUpdateClick}>
                <P
                    variant="Button">
                    Actualizar usuario
                </P>
            </Button>
            <Button
                className={styles.button}
                onClick={onSignOutClick}
                variant="outlined">
                <P
                    variant="Button">
                    Cerrar Sesión
                </P>
            </Button>
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
