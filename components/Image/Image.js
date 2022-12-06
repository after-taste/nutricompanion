import * as NextImage from 'next/image';
import Flex from 'components/Flex/Flex';

const Image = ({
    src,
    alt = 'An Image',
    width,
    height,
    ...props
}) => {
    return (<>
        <Flex
            direction="row">
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                {...props} />
        </Flex>
    </>);
};

export default Image;
