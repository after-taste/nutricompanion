import { useState, useMemo } from 'react';
import Link from 'next/link';
import Flex from 'components/Flex/Flex';
import Image from 'components/Image/Image';

import Video from 'components/Video/Video';
import Button from 'components/Input/Button';

import styles from './RoutineBox.module.css';


const dias = [
    {
        name: 'Dia 1',
        url: '/daily/day1'
    },
    {
        name: 'Dia 2',
        url: '/daily/day2'
    },
    {
        name: 'Dia 3',
        url: '/daily/day3'
    },
    {
        name: 'Dia 4',
        url: '/daily/day4'
    },
];

const RoutineList = ({ routine }) => {


    return (<>
        <Flex
            fullWidth>
            <h3>Rutinas:</h3>
            {dias?.map((d, i) =>
                <Link 
                key={`link-to-day-${i}`}
                href={d.url}>
                    <Button variant="outlined" className={styles.buttons}>
                        {d.name}
                    </Button>
                </Link>
            )}
        </Flex>
    </>);
};

export default RoutineList;
