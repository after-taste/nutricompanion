import { useState, useEffect } from 'react';
import Flex from 'components/Flex/Flex';
import P from 'components/Text/P';
import styles from './Clock.module.css';

const options = { timeStyle: 'medium', hour12: true };

const Clock = ({ align, ...props }) => {
    const [clockTime, setClockTime] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => setClockTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (<>
        <Flex
            fullWidth>
            <P variant="h4">
                {clockTime?.toLocaleTimeString('es-CR', options)}
            </P>
        </Flex>
    </>);
};

export default Clock;
