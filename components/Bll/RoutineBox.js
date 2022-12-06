import Flex from 'components/Flex/Flex';

import styles from './RoutineBox.module.css';

const RoutineBox = ({ sets }) => {
    return (<>
        <Flex
            fullWidth>
            <Flex
                fullWidth
                flexDirection="row">
                <Flex
                    className={styles.column1}>
                    <h4>Ejercicio:</h4>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <h4>Sets:</h4>
                </Flex>
                <Flex
                    className={styles.column3}>
                    <h4>Reps:</h4>
                </Flex>
                <Flex
                    className={styles.column4}>
                    <h4>Maq:</h4>
                </Flex>
            </Flex>
            {sets.map((s) => <RoutineRow set={s} />)}
        </Flex>
    </>);
};

const RoutineRow = ({ set }) => (<>
    <Flex
        fullWidth
        flexDirection="row">
        <Flex
            className={styles.column1}>
            <p>{set.exercise.name}</p>
        </Flex>
        <Flex
            className={styles.column2}>
            <p>{set.sets}</p>
        </Flex>
        <Flex
            className={styles.column3}>
            <p>{set.repetitions}</p>
        </Flex>
        <Flex
            className={styles.column4}>
            <p>25</p>
        </Flex>
    </Flex>
</>);

export default RoutineBox;
