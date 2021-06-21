import React, { useState } from 'react';
import Flex from '@components/Flex/Flex';
import TarjetaComida from '@components/Custom/TarjetaComida';

import '@blocks/PlanAlimenticio/Comida.scss';

export default ({ tiempoDeComida, planAlimenticio, onReady, ...props }) => {
    const [done, setDone] = useState(false);

    const onReadyClick = () => {
        setDone(true);

        if (typeof onReady === 'function') {
            // Let know the parent component whatever you want to do
            onReady();
        }
    };

    return (
        <Flex
            className="container"
            flexDirection="column">
            <Flex
                justifyContent="space-between">
                <h3>{tiempoDeComida}</h3>
                <button onClick={onReadyClick}>
                    Listo
                </button>
            </Flex>
            {done || planAlimenticio && planAlimenticio.map((comida, index) => (
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