import { useState, useEffect } from 'react';
export const useResizeWidth = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize, false);

        return () => {
            window.removeEventListener('resize', handleResize, false);
        };
    });

    return width;
};
