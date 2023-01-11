import { useState, useEffect } from 'react';
import { onAuthStateChanged, parseUser } from 'services/firebase/auth';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'styles/globals.css';

const App = ({ Component, pageProps }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(async (authData) => {
            if (authData?.uid && !authData.isAnonymous) {
                const _user = await parseUser(authData);
                setUser(_user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return <Component
        user={user}
        {...pageProps} />;
};

export default App;
