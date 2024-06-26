import { useEffect, useState } from 'react';
import Flex from 'components/Flex/Flex';

const Checkbox = ({ onChange, checked, enabled = true }) => {
    const [value, setValue] = useState(checked);

    const onCheck = () => {
        if (enabled) {
            setValue(!value);
        }
    };

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(!value);
        }
    }, [value, onChange]);

    return (<>
        <Flex
            direction="row">
            <input
                type="checkbox"
                onClick={onCheck} />
        </Flex>
   </>);
};

export default Checkbox;
