import { useReducer, useEffect } from 'react';
import Flex from 'components/Flex/Flex';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    };
};

const Counter = ({ max, onChange }) => {
    const [{ count }, dispatch] = useReducer(reducer, { count: 0 });
    const decrement = () => dispatch({ type: 'decrement' });
    const increment = () => dispatch({ type: 'increment' });

    useEffect(() => {
        if (count > max) {
            decrement();
        } else if (count < 0) {
            increment();
        }
    }, [count, max]);

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(count);
        }
    }, [count]);

    return (<>
        <Flex
            flexDirection="row"
            alignItems="center">
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </Flex>
   </>);
};

export default Counter;
