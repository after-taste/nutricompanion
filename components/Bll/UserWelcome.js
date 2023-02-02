import { useState, useMemo } from 'react';
import Flex from 'components/Flex/Flex';
import P from 'components/Text/P';
import Clock from 'components/Clock/Clock';


const copy = {
    hello: 'Hola,',
};

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const UserWelcome = ({ user, showClock }) => {
    return (<>
        <Flex
            fullWidth>
            <P
                variant="h2">
                {copy.hello}
            </P>
            <P
                variant="h1">
                {user?.displayName || 'Usuario'}
            </P>
            <P
                variant="caption">
                Hoy {(new Date()).toLocaleDateString('es-CR', options)} &#127774;
            </P>
            {showClock &&
                <Clock />
            }
        </Flex>
    </>);
};

export default UserWelcome;
