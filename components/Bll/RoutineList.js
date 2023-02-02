import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Flex from 'components/Flex/Flex';
import Button from 'components/Input/Button';
import P from 'components/Text/P';

import styles from './Routine.module.css';
import { getAvailableRoutines } from 'services/bll';

const RoutineList = ({ user, routine }) => {
    const [days, setDays] = useState(null);

    const loadData = async () => {
        const data = await getAvailableRoutines(user.uid);
        setDays(data);
    };

    useEffect(() => {
        if (user?.uid) {
            loadData();
        }
    }, [user]);

    return (<>
        <Flex
            fullWidth>
            <P
                variant="h6">
                Rutinas:
            </P>
            {days?.map((d, i) =>
                <Link
                    key={`link-to-day-${i}`}
                    href={d.url}>
                    <Button
                        variant="outlined"
                        className={styles.buttons}>
                        {d.label}
                    </Button>
                </Link>
            )}
        </Flex>
    </>);
};

export default RoutineList;
