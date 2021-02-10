import React from 'react';
import { Link } from 'gatsby';
import Flex from '@components/Flex/Flex';

import facebookLogo from '@images/icons/facebook.svg';
import instagramLogo from '@images/icons/instagram.svg';
import whatsappLogo from '@images/icons/whatsapp.svg';
import youtubeLogo from '@images/icons/youtube.svg';

import '@styles/components/Footer/Footer.scss';

const links = [
    { text: 'Page 1', href: '/page1' },
    { text: 'Page 2', href: '/page2' },
    { text: 'Page 3', href: '/page3' },
    { text: 'Page 4', href: '/page4' }
];

export default ({ data }) => {

    return (
        <React.Fragment>
            <Flex
                className="footer-container"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="column">
                <Flex
                    className="navigation-container"
                    justifyContent="space-around"
                    alignItems="center">
                    <Flex
                        className="links-container"
                        flexDirection="column">
                        {links.length &&
                            links.map(({ text, href }, index) => (
                                <Link
                                    key={`footer-link-${index}`}
                                    className="link"
                                    to={href}>
                                    {text}
                                </Link>
                            ))
                        }
                    </Flex>
                    <Flex
                        className="social-container">
                        <img
                            className="social-logo"
                            src={facebookLogo}
                            alt="Facebook" />
                        <img
                            className="social-logo"
                            src={instagramLogo}
                            alt="Instagram" />
                        <img
                            className="social-logo"
                            src={whatsappLogo}
                            alt="WhatsApp" />
                        <img
                            className="social-logo"
                            src={youtubeLogo}
                            alt="Youtube" />
                    </Flex>
                </Flex>
                <Flex
                    className="contact-container">
                    <p>Phone: 8888-8888 / Email: nutri@companion.com</p>
                </Flex>
                <Flex
                    className="copyright-container">
                    <p>Copyright 2021</p>
                </Flex>
            </Flex>
        </React.Fragment>
    );
};