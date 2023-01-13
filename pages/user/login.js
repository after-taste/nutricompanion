import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usePersistedState } from '@dannyman/use-store';
import Flex from 'components/Flex/Flex';
import Text from 'components/Input/Text';
import Button from 'components/Input/Button';
import withLayout from 'hoc/withLayout';
import { newRecaptcha, signInWithPhone, verifyPhoneSignIn } from 'services/firebase/auth';
import { isBrowser } from 'utils';


const Login = ({ user, ...props }) => {
    const router = useRouter();

    const [confirmationResult, setConfirmationResult] = useState(null);
    const [showVerificationBox, setShowVerificationBox] = useState(false);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const onSignInSubmit = async () => {
        if (window.recaptchaVerifier) {
            const _confirmationResult = await signInWithPhone(phone, window.recaptchaVerifier);
            setConfirmationResult(_confirmationResult);
            setShowVerificationBox(true);
        }
    };

    const verifySignIn = async () => {
        if (confirmationResult && code) {
            await verifyPhoneSignIn(confirmationResult, code);
        }
    };

    useEffect(() => {
        window.recaptchaVerifier = newRecaptcha('sign-in-button');
    }, []);

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user]);

    return (<>
        <Flex>
            <h1>Login</h1>
            {!showVerificationBox ?
                <Flex>
                    <Text
                        key="sign-in-input"
                        label="Teléfono"
                        onChange={setPhone} />
                    <Button
                        id="sign-in-button"
                        onClick={onSignInSubmit}>
                        <p>Sign In</p>
                    </Button>
                </Flex>
                :
                <Flex>
                    <Text
                        key="verify-input"
                        label="Codigo de verificación"
                        onChange={setCode} />
                    <Button
                        onClick={verifySignIn}>
                        <p>Verify</p>
                    </Button>
                </Flex>
            }
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

export default withLayout(Login);
