import { useEffect, useRef, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Flex from 'components/Flex/Flex';
import Header from 'components/Header/Header';
import Carousel from 'components/Hero/Carousel';
import Footer from 'components/Footer/Footer';

import styles from './Basic.module.css';

const Basic = ({ theme, heroImages, children, ...props }) => {
    const headerRef = useRef();
    const contentRef = useRef();
    const footerRef = useRef();
    const [minHeight, setMinHeight] = useState(null);

    useEffect(() => {
        const headerHeight = headerRef?.current.scrollHeight;
        const contentHeight = contentRef?.current.scrollHeight;
        const footerHeight = footerRef?.current.scrollHeight;

        const domHeight = headerHeight + contentHeight + footerHeight;
        const windowHeight = window.innerHeight;
        const difference = windowHeight - domHeight;

        if (difference > 0) {
            setMinHeight(contentHeight + difference);
        }
    }, []);

    return (<>
        <CssBaseline />
        <Flex
            className={styles.mainLayout}
            justifyContent="center"
            alignItems="center">
            <Flex
                className={styles.mainWrapper}
                flexDirection="column">
                <header
                    ref={headerRef}>
                    <Header
                        user={props.user}
                        theme={theme} />
                    <Carousel
                        images={heroImages} />
                </header>
                <main
                    ref={contentRef}
                    style={{ minHeight: minHeight }}>
                    <Flex
                        className={styles.content}
                        flexDirection="column">
                        {children}
                    </Flex>
                </main>
                <footer
                    ref={footerRef} >
                    <Footer
                        theme={theme} />
                </footer>
            </Flex>
        </Flex>
    </>);
};

export default Basic;
