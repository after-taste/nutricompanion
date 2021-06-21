import React, { useEffect, useState } from 'react';
import Flex from '@components/Flex/Flex';
import FoodCard from '@components/Custom/FoodCard';

import '@components/Custom/Meal.scss';

export default ({ mealTime, eatingPlan, onReady, ...props }) => {
    const [done, setDone] = useState(false);
    const [consumedMeals, setConsumedMeals] = useState(() => {
        let _consumedMeals = {};

        eatingPlan.forEach(plan => _consumedMeals[plan.alimento.nombre] = {
            consumed: 0,
            available: plan.cantidad
        });

        return _consumedMeals;
    });

    const onReadyClick = () => {
        if (typeof onReady === 'function') {
            // Let know the parent component whatever you want to do
            onReady(consumedMeals);
        }

        setDone(true);
    };

    const onMealChange = (mealType, consumed) => {
        const _plan = eatingPlan.find(plan => plan.alimento.nombre === mealType);

        setConsumedMeals({
            ...consumedMeals,
            [mealType]: {
                consumed: consumed,
                available: (_plan.cantidad - consumed)
            }
        });
    };

    return (
        <Flex
            className="container"
            flexDirection="column">
            <Flex
                justifyContent="space-between">
                <h3>{mealTime}</h3>
                {props.showReadyButton &&
                    <button onClick={onReadyClick}>
                        Listo
                    </button>
                }
            </Flex>
            {done || (eatingPlan &&
                eatingPlan.map((comida, index) => (
                    <FoodCard
                        quantity={comida.cantidad}
                        name={comida.alimento.nombre}
                        interchanges={comida.alimento.intercambios}
                        example={comida.ejemplo}
                        showCounter={props.showCounter}
                        onChange={onMealChange}
                        key={index}
                    />
                ))
            )}
        </Flex>
    );
};