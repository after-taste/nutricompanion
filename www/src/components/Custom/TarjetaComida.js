import React from 'react';
import Flex from '@components/Flex/Flex';
import Checkbox from '@components/Input/Checkbox';

// import '@blocks/PlanAlimenticio/Comida.scss';

export default ({ cantidad, alimento, ejemplo }) => {
    return (
        <Flex
            flexDirection="row"
            alignItems="center">
            <Checkbox />
            <p><strong>{cantidad} {alimento.nombre}{cantidad > 1 ? 's' : ''}</strong></p>
            <p>: {ejemplo}</p>
        </Flex>
    );
};
