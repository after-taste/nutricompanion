import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usePersistedState } from '@dannyman/use-store';
import Flex from 'components/Flex/Flex';
import Text from 'components/Input/Text';
import Button from 'components/Input/Button';
import P from 'components/Text/P';
import withLayout from 'hoc/withLayout';
import { newRecaptcha, signInWithPhone, verifyPhoneSignIn } from 'services/firebase/auth';
import { dummyImages } from 'mocks/images';

const copy = {
    title: 'Bienvenid@!',
    body: 'Si usted esta registrado inicie sesión, si no registrese y se le estara contactando pronto.',
    phoneInput: 'Teléfono',
    phoneInputHelperText: 'Inicia sesión o Registrate',
    firstStepButton: 'Pedir código',
    secondStepButton: 'Código de verificación',
};


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

    const setPhoneHandler = (value) => setPhone('+506' + value);

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
            <P
                variant="h2">
                {copy.title}
            </P>
            <P>
                {copy.body}
            </P>
            {!showVerificationBox ?
                <Flex>
                    <Text
                        key="sign-in-input"
                        label={copy.phoneInput}
                        helperText={copy.phoneInputHelperText}
                        onChange={setPhoneHandler} />
                    <Button
                        id="sign-in-button"
                        onClick={onSignInSubmit}>
                        <P variant="button">
                            {copy.firstStepButton}
                        </P>
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
                        <P variant="button">
                            {copy.secondStepButton}
                        </P>
                    </Button>
                </Flex>
            }
        </Flex>
    </>);
};

export const getServerSideProps = async (context) => {
    return {
        props: {
            heroImages: dummyImages
        },
    }
};

export default withLayout(Login);
