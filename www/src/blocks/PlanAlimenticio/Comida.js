import React from 'react';
import Flex from '@components/Flex/Flex';
import TarjetaComida from '@components/Custom/TarjetaComida';

import '@blocks/PlanAlimenticio/Comida.scss';

export default ({ tiempoDeComida, planAlimenticio, ...props }) => {
    return (
        <Flex
            flexDirection="column">
            <h3>{tiempoDeComida}</h3>
            {planAlimenticio && planAlimenticio.map((comida, index) => (
                <TarjetaComida
                    cantidad={comida.cantidad}
                    alimento={comida.alimento}
                    ejemplo={comida.ejemplo}
                    mostrarSelector={props.mostrarSelector}
                    key={index}
                />
            ))}
        </Flex>
    );
};