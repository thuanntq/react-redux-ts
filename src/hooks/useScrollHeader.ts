import { useState, useEffect } from 'react';

type CssProps = {
    transform: string;
};

export const useScrollHeader = () => {
    const [style, setStyle] = useState<CssProps>({ transform: 'none' });

    const getClientRect = (): DOMRect => document.body.getBoundingClientRect();

    useEffect(() => {
        let scrollPos = 0;
        window.addEventListener('scroll', () => {
            const transformValue: string = getClientRect().top > scrollPos ? 'none' : 'translateY(-100%)';

            setStyle({ transform: transformValue });

            scrollPos = getClientRect().top;
        });
        return ()=>{
            //
        }
    }, []);

    return style;
};

