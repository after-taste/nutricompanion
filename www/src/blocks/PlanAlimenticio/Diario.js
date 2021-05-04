import React from 'react';
import Flex from '@components/Flex/Flex';

import Comida from '@blocks/PlanAlimenticio/Comida';

// import '@blocks/PlanAlimenticio/Diario.scss';

export default ({ diaDeLaSemana, caloriasDiarias, planAlimenticio, ...props }) => {
    console.log(planAlimenticio)
    return (
        <Flex
            flexDirection="column">
            {diaDeLaSemana && <h3>{diaDeLaSemana}</h3>}
            {caloriasDiarias && <p>Calorias a consumir: {caloriasDiarias}</p>}
            {planAlimenticio && planAlimenticio.map((plan, index) => plan?.plan.length ? (
                <Comida
                    tiempoDeComida={plan.tiempo}
                    planAlimenticio={plan.plan}
                    {...props}
                    key={index} />
            ) : null)}
        </Flex>
    );
};