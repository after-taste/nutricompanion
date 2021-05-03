import { useState, useEffect, useCallback } from 'react';
import { isBrowser } from '@services/utils';

const MOBILE_MAX_WIDTH = 1024;

const useMobile = () => {
    let [isMobile, setIsMobile] = useState(false);

    const handleStatusChange = useCallback(() => {
        const w = document.documentElement.clientWidth || 0;
        setIsMobile(() => (w <= MOBILE_MAX_WIDTH));
    });

    useEffect(() => {
        if (isBrowser) {
            handleStatusChange();

            window.addEventListener('resize', handleStatusChange);
            return () => window.removeEventListener('resize', handleStatusChange);
        }
    }, []);

    return isMobile;
};

export default useMobile;