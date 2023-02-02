import { useEffect, useState } from 'react';
import Flex from 'components/Flex/Flex';

import styles from './Carousel.module.css';


const Carousel = ({ images, }) => {
    if (!images) return null;

    const [position, setPosition] = useState(0);

    const onImageClick = () => {
        setPosition(position < (images.length - 1) ? (position + 1) : 0);
    };

    return (<>
        <Flex
            className={styles.container}
            backgroundImage={`url("${images[position].img}")`}
            direction="row"
            fullWidth
            onClick={onImageClick}>
        </Flex>
    </>);
};

export default Carousel;
