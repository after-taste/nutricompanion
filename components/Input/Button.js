import Flex from 'components/Flex/Flex';

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
            <button
                style={style}
                className={className}
                disabled={disabled}
                onClick={onClick}
                {...props}>
                {children}
            </button>
        </Flex>
    </>);
};

export default Button;
