import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Flex from 'components/Flex/Flex';

const Text = ({
    onChange,
    label = '',
    enabled = true,
    defaultValue = '',
    ...props
}) => {
    const [value, setValue] = useState(defaultValue);

    console.log(label)

    const onAction = (e) => {
        e.preventDefault();
        if (enabled) setValue(e.target.value);
    };

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(value);
        }
    }, [value]);

    return (<>
        <Flex
            direction="row">
            <TextField
                id="outlined-basic"
                variant="outlined"
                margin="normal"
                label={label}
                value={value}
                onChange={onAction}
                {...props} />
        </Flex>
    </>);
};

export default Text;
