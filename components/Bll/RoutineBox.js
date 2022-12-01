import Flex from 'components/Flex/Flex';

import styles from './RoutineBox.module.css';

const RoutineBox = () => {
    return (<>
        <Flex
            fullWidth>
            <Flex
                fullWidth
                flexDirection="row">
                <Flex
                    className={styles.column1}>
                    <p>Ejercicio:</p>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <p>Sets:</p>
                </Flex>
                <Flex
                    className={styles.column3}>
                    <p>Reps:</p>
                </Flex>
                <Flex
                    className={styles.column4}>
                    <p>Maq:</p>
                </Flex>
            </Flex>
            <Flex
                fullWidth
                flexDirection="row">
                <Flex
                    className={styles.column1}>
                    <p>Burpee pecho inclinado boca arriba</p>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <p>5</p>
                </Flex>
                <Flex
                    className={styles.column3}>
                    <p>15</p>
                </Flex>
                <Flex
                    className={styles.column4}>
                    <p>25</p>
                </Flex>
            </Flex>
        </Flex>
    </>);
};

export default RoutineBox;
