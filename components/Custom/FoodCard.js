import { useEffect, useState } from 'react';
import Flex from 'components/Flex/Flex';
import Counter from 'components/Counter/Counter';
import { endsWithVowel } from 'utils';

import styles from './FoodCard.module.css';

const FoodCard = ({ quantity, name, example, interchanges, showCounter, onChange }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(name, counter);
        }
    }, [counter]);

    const _name = `${name}${quantity > 1 ? (endsWithVowel(name) ? 's' : 'es') : ''}`;

    return (<>
        <Flex
            flexDirection="column"
            alignItems="center">
            <Flex
                className={styles.buttonContainer}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start">
                <details>
                    <summary>
                        <strong>{quantity} {_name}</strong>
                    </summary>
                    <ul>
                        <li>{example}</li>
                        {interchanges &&
                            interchanges.map((i, index) => (<li key={index}>{i}</li>))}
                    </ul>
                </details>
                {showCounter &&
                    <Counter
                        onChange={setCounter}
                        max={quantity} />
                }
            </Flex>
        </Flex>
    </>);
};

export default FoodCard;
