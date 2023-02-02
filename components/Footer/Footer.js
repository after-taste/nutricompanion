import Link from 'next/link';
import Image from 'next/image';

import Flex from 'components/Flex/Flex';
import P from 'components/Text/P';

import styles from './Footer.module.css';

const links = [
    { text: 'Page 1', href: '/page1' },
    { text: 'Page 2', href: '/page2' },
    { text: 'Page 3', href: '/page3' },
    { text: 'Page 4', href: '/page4' }
];

const Footer = ({ theme }) => {

    return (<>
        <Flex
            className={styles.footerContainer}
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
            backgroundColor={theme?.primaryColor?.hex}>
            <Flex
                className={styles.contactContainer}
                flexDirection="row">
                <P>Phone: <a href="tel:+496170961709">8888-8888</a> - Email:  <a href="mailto:nutri@companion.com">nutri@companion.com</a></P>
            </Flex>
            <Flex
                className={styles.navigationContainer}
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center">
                {/* <Flex
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
                </Flex> */}
                <Flex
                    className={styles.socialContainer}
                    flexDirection="row"
                    fullWidth
                    justifyContent="space-evenly">
                    <Flex
                        className={styles.socialLogo}>
                        <Image
                            width={25}
                            height={25}
                            src="/icons/facebook.svg"
                            alt="Facebook" />
                    </Flex>
                    <Flex
                        className={styles.socialLogo}>
                        <Image
                            className={styles.socialLogo}
                            width={25}
                            height={25}
                            src="/icons/instagram.svg"
                            alt="Instagram" />
                    </Flex>
                    <Flex
                        className={styles.socialLogo}>
                        <Image
                            className={styles.socialLogo}
                            width={25}
                            height={25}
                            src="/icons/whatsapp.svg"
                            alt="WhatsApp" />
                    </Flex>
                    <Flex
                        className={styles.socialLogo}>
                        <Image
                            className={styles.socialLogo}
                            width={25}
                            height={25}
                            src="/icons/youtube.svg"
                            alt="Youtube" />
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                className={styles.copyrightContainer}
                flexDirection="row">
                <P>Copyright After Taste, 2023</P>
            </Flex>
        </Flex>
    </>);
};

export default Footer;
