import { useState, useMemo, useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import CircularProgress from '@mui/material/CircularProgress';
import Flex from 'components/Flex/Flex';
import Image from 'components/Image/Image';
import Video from 'components/Video/Video';
import P from 'components/Text/P';

import styles from './Routine.module.css';

const copy = {
    noData: 'No hay datos para este día',
    exerciseTitle: 'Ejercicio',
    setsTitle: 'Sets',
    repetitionsTitle: 'Reps',
    machineTitle: 'Maq',
    machineExpandedCopy: 'Este ejercicio utiliza la siguiente maquina',
    machineExpandedTitle: 'Maquina',
};

const RoutineBox = ({ routine }) => {
    const dayRoutine = useMemo(() => {
        return routine?.length > 0 ?
            routine.map((r, i) => {
                switch (r.__typename) {
                    case 'MultiSetRecord':
                        return r.multiSet.map(((s, ix) => <RoutineRow key={`routine-multi-row-${i}-${ix}`} set={s} multiSet />));
                    case 'SetRecord':
                        return <RoutineRow key={`routine-row-${i}`} set={r} />;
                };
            }) : <EmptyRoutineRow />
    }, [routine]);

    return routine ?
        <Flex
            fullWidth>
            <RoutineTitle />
            {dayRoutine}
        </Flex>
        :
        <Flex
            fullWidth
            alignItems="center">
            <CircularProgress />
        </Flex>;
};

const RoutineTitle = () => {
    return (<>
        <Flex
            fullWidth
            className={styles.routineTitles}
            flexDirection="row">
            <Flex
                className={styles.column1}>
                <P
                    variant="subtitle2">
                    {copy.exerciseTitle}
                </P>
            </Flex>
            <Flex
                className={styles.column2}>
                <P
                    variant="subtitle2">
                    {copy.setsTitle}
                </P>
            </Flex>
            <Flex
                className={styles.column2}>
                <P
                    variant="subtitle2">
                    {copy.repetitionsTitle}
                </P>
            </Flex>
            <Flex
                className={styles.column2}>
                <P
                    variant="subtitle2" >
                    {copy.machineTitle}
                </P>
            </Flex>
        </Flex>
    </>)
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
                    <P>
                        {set.exercise.name}
                    </P>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <P>
                        {set.sets}
                    </P>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <P>
                        {set.repetitions}
                    </P>
                </Flex>
                <Flex
                    className={styles.column2}>
                    <P>
                        25
                    </P>
                </Flex>
            </Flex>
            <Collapse
                orientation="vertical"
                in={expanded}
                sx={{ width: '100%' }}>
                <Flex
                    className={styles.routineRowExpanded}
                    flexDirection="column"
                    fullWidth>
                    <P
                        variant="body2">
                        {set.exercise.description}
                    </P>
                    {set.exercise.howTo &&
                        <Video
                            autoPlay
                            muted
                            src={set.exercise.howTo.url} />
                    }
                    {set.exercise.machine &&
                        <Flex>
                            <P
                                variant="overline">
                                <b>{set.exercise.machine.name}</b>
                            </P>
                            <P
                                variant="body2">
                                {set.exercise.machine.description}
                            </P>
                            {set.exercise.machine.image &&
                                <Flex
                                    className={styles.imageContainer}>
                                    <Image
                                        src={set.exercise.machine.image?.url}
                                        objectFit="cover"
                                        fill />
                                </Flex>
                            }
                        </Flex>
                    }
                </Flex>
            </Collapse>
        </Flex>
    </>);
};

const EmptyRoutineRow = () => (<>
    <Flex
        flexDirection="row"
        justifyContent="center"
        fullWidth>
        <P
            color="orange"
            align="center"
            variant="h5">
            {copy.noData}
        </P>
    </Flex>
</>);

export default RoutineBox;
