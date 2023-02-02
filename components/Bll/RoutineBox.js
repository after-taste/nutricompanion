import { useState, useMemo, useEffect } from 'react';
import Flex from 'components/Flex/Flex';
import Image from 'components/Image/Image';

import styles from './RoutineBox.module.css';
import Video from 'components/Video/Video';

const RoutineBox = ({ routine }) => {

    const dayRoutine = useMemo(() => {
        return routine ?
            routine.map((r, i) => {
                switch (r.__typename) {
                    case 'MultiSetRecord':
                        return r.multiSet.map(((s, ix) => <RoutineRow key={`routine-multi-row-${i}-${ix}`} set={s} multiSet />));
                    case 'SetRecord':
                        return <RoutineRow key={`routine-row-${i}`} set={r} />;
                };
            })
            :
            <Flex
                className={styles.noData}
                flexDirection="row"
                justifyContent="center"
                fullWidth>
                <p>No hay datos para este día.</p>;
            </Flex>
    }, [routine]);

    return (<>
        <Flex
            fullWidth>
            <Flex
                fullWidth
                className={styles.tableTitles}
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
                    className={styles.column2}>
                    <h4>Reps:</h4>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <h4>Maq:</h4>
                </Flex>
            </Flex>
            {dayRoutine}
        </Flex>
    </>);
};

const RoutineRow = ({ set, multiSet }) => {
    const [expanded, setExpanded] = useState(false);

    return (<>
        <Flex
            className={styles.routineRowContainer}
            fullWidth
            flexDirection="column"
            backgroundColor={multiSet ? 'lightgray' : ''}>
            <Flex
                className={styles.routineRowContent}
                flexDirection="row"
                fullWidth
                onClick={() => setExpanded(!expanded)}>
                <Flex
                    className={styles.column1}>
                    <p>{set.exercise.name}</p>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <p>{set.sets}</p>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <p>{set.repetitions}</p>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <p>25</p>
                </Flex>
            </Flex>
            {expanded &&
                <Flex
                    className={styles.routineRowExpanded}
                    flexDirection="column"
                    fullWidth>
                    <p>{set.exercise.description}</p>
                    {set.exercise.howTo &&
                        <Video
                            autoPlay
                            muted
                            src={set.exercise.howTo.url} />
                    }
                    {set.exercise.machine &&
                        <Flex>
                            <h5>Maquina: {set.exercise.machine.name}</h5>
                            <p>{set.exercise.machine.description}</p>
                            {set.exercise.machine.image &&
                                <Image
                                    src={set.exercise.machine.image?.url}
                                    width={325}
                                    height={244} />
                            }
                        </Flex>
                    }
                </Flex>
            }
        </Flex>
    </>);
};

export default RoutineBox;
