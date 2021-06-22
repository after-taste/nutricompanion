import { useEffect, useState } from 'react';
import Image from 'next/image';
import Flex from 'components/Flex/Flex';
import FoodCard from 'components/Custom/FoodCard';

import styles from './Meal.module.css';

const Meal = ({ mealTime, eatingPlan, onReady, ...props }) => {
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

    return (<>
        <Flex
            className={styles.container}
            flexDirection="column">
            <Flex
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center">
                <h3>{mealTime}</h3>
                {props.showReadyButton &&
                    (done ?
                        <Flex
                            className={styles.doneIcon}>
                            <Image
                                width="25px"
                                height="25px"
                                src="/icons/green_check.png"
                                alt="Done" />
                        </Flex>
                        :
                        <button onClick={onReadyClick}>
                            Listo
                        </button>
                    )
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
    </>);
};

export default Meal;
