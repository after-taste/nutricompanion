import { useEffect, useRef, useState } from 'react';
import Flex from 'components/Flex/Flex';

import styles from './Carousel.module.css';
import Image from 'components/Image/Image';
import { getRandomInt } from 'utils';


const Carousel = ({ images, }) => {
    if (!images) return null;

    const [position, setPosition] = useState(0);

    const onImageClick = () => {
        setPosition(position < (images.length - 1) ? (position + 1) : 0);
    };

    useEffect(() => {
        setPosition(getRandomInt(images.length - 1));
    }, []);

    return (<>
        <Flex
            className={styles.container}
            direction="row"
            fullWidth
            onClick={onImageClick}>
            <Image
                alt={`hero-image-${images[position].alt}`}
                src={images[position].src}
                objectFit="cover"
                fill />
        </Flex>
    </>);
};

export default Carousel;
