import {
    GoogleAuthProvider,
    linkWithCredential,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    updateProfile
} from 'firebase/auth';
import { auth } from 'services/firebase';
import { isBrowser } from 'utils';

auth.languageCode = 'es';

const getIdToken = () => auth.currentUser?.getIdToken();

const getIdTokenAsCredential = (idToken) => GoogleAuthProvider.credential(idToken);

const getIdTokenResult = () => auth.currentUser?.getIdTokenResult();

const getCurrentUser = () => auth.currentUser;

const signInWithPhone = async (phone, verifier) => {
    try {
        return await signInWithPhoneNumber(auth, phone, verifier);
    } catch (error) {
        console.error('Firebase/users/signInWithPhone Error: ', error.message);
        verifier.recaptcha.reset();
        return null;
    }
};

const verifyPhoneSignIn = async (confirmationResult, code) => {
    try {
        return await confirmationResult.confirm(code);
    } catch (error) {
        console.error('Firebase/users/verifyPhoneSignIn Error: ', error.message);
        return null;
    }
};

const signOut = () => auth.signOut();

const onAuthStateChanged = (_callback) => auth.onAuthStateChanged(_callback);

const linkIDTokenWithCurrentUser = (idTokenAsCred) => linkWithCredential(auth.currentUser, idTokenAsCred);

const newRecaptcha = (elementId) => {
    if (isBrowser) {
        return new RecaptchaVerifier(elementId, {
            'size': 'invisible',
        }, auth);
    }
};

const parseUser = async (user) => {
    if (user) {
        const idTokenResult = await user?.getIdTokenResult();

        return {
            displayName: user?.displayName,
            email: user?.email,
            emailVerified: user?.emailVerified,
            photoURL: user?.photoURL,
            isAnonymous: user?.isAnonymous,
            uid: user?.uid,
            // providerData: user?.providerData,
            phoneNumber: user?.phoneNumber,
            idToken: idTokenResult.token,
            // passportId: idTokenResult.claims.passportId,
            // role: idTokenResult.claims.role,
        };
    } else {
        return null;
    }
};

const updateUser = async (newData) => {
    try {
        await updateProfile(auth.currentUser, newData);
        return true;
    } catch (error) {
        console.error('Firebase/users/updateUser Error: ', error.message);
        return false;
    }
};

export {
    auth,
    getIdToken,
    getIdTokenAsCredential,
    getIdTokenResult,
    getCurrentUser,
    signInWithPhone,
    verifyPhoneSignIn,
    signOut,
    onAuthStateChanged,
    linkIDTokenWithCurrentUser,
    newRecaptcha,
    parseUser,
    updateUser
};
