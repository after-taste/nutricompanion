import Flex from 'components/Flex/Flex';

const Video = ({
    src,
    ...props
}) => {
    return <>
        <Flex
            direction="row" >
            <video
                controls
                width="250"
                {...props}>
                <source src={src}
                    type="video/mp4" />
            </video>
        </Flex>
    </>;
};

export default Video;
