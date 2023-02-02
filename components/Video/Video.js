import Flex from 'components/Flex/Flex';

const Video = ({
    src,
    ...props
}) => {
    return <>
        <Flex
            direction="row"
            fullWidth>
            <video
                controls
                {...props}>
                <source src={src}
                    type="video/mp4" />
            </video>
        </Flex>
    </>;
};

export default Video;
