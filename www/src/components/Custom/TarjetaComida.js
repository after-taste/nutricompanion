import React from 'react';
import Flex from '@components/Flex/Flex';
import Counter from '@components/Counter/Counter';
import { endsWithVowel } from '@services/utils';

import '@components/Custom/TarjetaComida.scss';

export default ({ cantidad, alimento, ejemplo, mostrarSelector }) => {
    const nombre = `${alimento.nombre}${cantidad > 1 ? (endsWithVowel(alimento.nombre) ? 's' : 'es') : ''}`;

    return (
        <Flex
            flexDirection="column"
            alignItems="center">
            <Flex
                className="button-container"
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center">
                {mostrarSelector &&
                    <Counter
                        max={cantidad} />
                }
                <p>
                    <strong>{cantidad} {nombre}</strong>
                </p>
            </Flex>
            <Flex
                className="button-container"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start">
                <details>
                    <summary>
                        <strong>Ejemplo</strong>
                    </summary>
                    <ul>
                        <li>{ejemplo}</li>
                        {alimento.intercambios &&
                            alimento.intercambios.map(i => (<li>{i}</li>))}
                    </ul>
                </details>
            </Flex>
        </Flex>
    );
};
