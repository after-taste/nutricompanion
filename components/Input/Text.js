import { useEffect, useState } from 'react';
import Flex from 'components/Flex/Flex';

const Text = ({ onChange, defaultValue = '', enabled = true, ...props }) => {
    const [value, setValue] = useState(defaultValue);

    const onAction = (e) => {
        e.preventDefault();

        if (enabled) {
            setValue(e.target.value);
        }
    };

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(value);
        }
    }, [value]);

    return (<>
        <Flex
            direction="row">
            <input
                type="text"
                value={value}
                onChange={onAction}
                {...props} />
        </Flex>
    </>);
};

export default Text;
