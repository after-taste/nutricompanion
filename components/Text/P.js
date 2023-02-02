import { useMemo } from 'react';
import Typography from '@mui/material/Typography';

const availableVariants = [
    'body1', // default, all displayed content text uses this.
    'body2',
    'button', // used on buttons
    'caption', // image captions
    'h1',  // titles
    'h2', // page titles
    'h3',
    'h4', // user displayed information
    'h5', // Warnings and messages
    'h6', // Subtitles
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
];

const P = ({
    align = 'inherit',
    color,
    children,
    variant = 'body1',
    ...props
}) => {
    const verifiedVariant = useMemo(() => {
        if (availableVariants.includes(variant)) {
            return variant;
        } else {
            return 'body1';
        }
    }, [variant]);

    return <>
        <Typography
            variant={verifiedVariant}
            sx={{
                overflowWrap: 'break-word',
                color: color || '',
                margin: '5px 0'
            }}
            align={align}>
            {children}
        </Typography>
    </>;
};

export default P;
