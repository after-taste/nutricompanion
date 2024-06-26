import { useState, useEffect } from 'react';
import { getThemeQuery } from 'gql/theme';
import { onAuthStateChanged, parseUser } from 'services/firebase/auth';
import { request } from 'utils/datoCMS';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'styles/globals.css';

const App = ({ Component, pageProps, theme }) => {
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
        theme={theme}
        {...pageProps} />;
};

App.getInitialProps = async (context) => {
    const data = await request({
        query: getThemeQuery,
    });

    return {
        theme: data?.theme
    };
};


export default App;
