import Flex from 'components/Flex/Flex';
import { default as MUIButton } from '@mui/material/Button';

const Button = ({
    className,
    children,
    onClick,
    style,
    disabled = false,
    ...props
}) => {
    return (<>
        <Flex
            direction="row">
            <MUIButton
                variant="contained"
                style={style}
                className={className}
                disabled={disabled}
                onClick={onClick}
                {...props}>
                {children}
            </MUIButton>
        </Flex>
    </>);
};

export default Button;
