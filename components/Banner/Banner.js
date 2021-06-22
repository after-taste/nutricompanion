import { useSessionState } from '@dannyman/use-store';
import Image from 'next/image';

import Flex from 'components/Flex/Flex';

import styles from './Banner.module.css';

// const games = [{ name: 'Danny', slug: 'Slug', author: 'Author' }];

const Banner = () => {
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
                // const notifImg = `data/Image/${games[randomItem].slug}.jpg`;
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

    return !hide && (<>
        <Flex
            className={styles.bannerContainer}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly">
            <p>Enable Notifications</p>
            <button
                className={styles.closeButton}
                onClick={enableNotifications}>
                x
                </button>
        </Flex>
    </>);
};

export default Banner;
