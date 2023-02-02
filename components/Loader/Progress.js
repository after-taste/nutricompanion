import Flex from 'components/Flex/Flex';
import CircularProgress from '@mui/material/CircularProgress';

const Progress = ({
    className,
    children,
    onClick,
    style,
    disabled = false,
    ...props
}) => {
    return (<>
        <Flex
            fullWidth
            direction="row"
            alignItems="center"
            justifyContent="center">
            <CircularProgress
                {...props} />
        </Flex>
    </>);
};

export default Progress;
