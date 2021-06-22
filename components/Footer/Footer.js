import Link from 'next/link';
import Image from 'next/image';

import Flex from 'components/Flex/Flex';

import styles from './Footer.module.css';

const links = [
    { text: 'Page 1', href: '/page1' },
    { text: 'Page 2', href: '/page2' },
    { text: 'Page 3', href: '/page3' },
    { text: 'Page 4', href: '/page4' }
];

const Footer = ({ data }) => {

    return (<>
        <Flex
            className={styles.footerContainer}
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column">
            <Flex
                className={styles.navigationContainer}
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center">
                <Flex
                    className={styles.linksContainer}
                    flexDirection="column">
                    {links.length &&
                        links.map(({ text, href }, index) => (
                            <Link
                                key={`footer-link-${index}`}
                                className={styles.link}
                                href={href}>
                                {text}
                            </Link>
                        ))
                    }
                </Flex>
                <Flex
                    flexDirection="row">
                    <Image
                        className={styles.socialLogo}
                        src="/icons/facebook.svg"
                        alt="Facebook" />
                    <Image
                        className={styles.socialLogo}
                        src="/icons/instagram.svg"
                        alt="Instagram" />
                    <Image
                        className={styles.socialLogo}
                        src="/icons/whatsapp.svg"
                        alt="WhatsApp" />
                    <Image
                        className={styles.socialLogo}
                        src="/icons/youtube.svg"
                        alt="Youtube" />
                </Flex>
            </Flex>
            <Flex
                className={styles.contactContainer}
                flexDirection="row">
                <p>Phone: 8888-8888 / Email: nutri@companion.com</p>
            </Flex>
            <Flex
                className={styles.copyrightContainer}
                flexDirection="row">
                <p>Copyright 2021</p>
            </Flex>
        </Flex>
    </>);
};

export default Footer;
