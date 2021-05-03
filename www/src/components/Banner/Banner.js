import React from 'react';
import { useSessionState } from '@dannyman/use-store';
import Flex from '@components/Flex/Flex';

import '@components/Banner/Banner.scss';

// const games = [{ name: 'Danny', slug: 'Slug', author: 'Author' }];



export default () => {
    const [hide, setHide] = useSessionState('nc:global:banner');

    // const enableNotifications = async () => {
    //     const sw = await navigator.serviceWorker.ready;
    //     const result = await sw.pushManager.subscribe({
    //         // userVisibleOnly: true,
    //         // applicationServerKey: 'some-key'
    //     })
    //     console.log(result)
    // };

    const enableNotifications = () => {
        Notification.requestPermission().then((result) => {
            if (result === 'granted') {
                const notifTitle = 'Title'
                const notifBody = `Body`;
                // const notifImg = `data/img/${games[randomItem].slug}.jpg`;
                const options = {
                    body: notifBody,
                    // icon: notifImg,
                };
                new Notification(notifTitle, options);
                // setTimeout(randomNotification, 3000);
            }
        });

        setHide(true);
    };

    return !hide && (
        <React.Fragment>
            <Flex
                className="banner-container"
                alignItems="center"
                justifyContent="space-evenly">
                <p>Enable Notifications</p>
                <button
                    onClick={enableNotifications}>
                    x
                </button>
            </Flex>
        </React.Fragment>
    );
};