import Flex from 'components/Flex/Flex';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import styles from './Basic.module.css';

const Basic = ({ children }) => {
    return (<>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <Flex
            className={styles.mainLayout}
            justifyContent="center"
            alignItems="center">
            <Flex
                className={styles.mainWrapper}
                flexDirection="column">
                <Header />
                <Flex
                    className={styles.content}
                    flexDirection="column">
                    {children}
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    </>);
};

export default Basic;
