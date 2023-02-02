import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Flex from 'components/Flex/Flex';
import P from 'components/Text/P';

const StandardImageList = ({ title, images }) => {
    return (<>
        <Flex fullWidth>
            <P
                variant="h6">
                {title}
            </P>
            <ImageList
                sx={{ width: '100%', height: '50%' }} cols={3} >
                {images.map((item) => (
                    <ImageListItem key={item.src}>
                        <img
                            src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.alt}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Flex>
    </>);
};

export default StandardImageList;
