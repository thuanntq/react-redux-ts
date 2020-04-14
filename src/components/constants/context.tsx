import React, { useLayoutEffect, useState } from 'react';
import { darkTheme, lightTheme } from './theme';

export interface ThemeOptionAttributes {
    foreground: string;
    background: string;
}

export type ThemeOptions = 'light' | 'dark';

export type ThemeProps = Record<ThemeOptions, ThemeOptionAttributes>;

/** Record se phai tra ve 1 object */
export const themes: ThemeProps = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export type ContextProps = {
    toggle: () => void;
    setting: ThemeOptionAttributes;
};

export const ThemeContext = React.createContext<ContextProps>({
    setting: themes.light,
    toggle: () => {},
});

export const ThemeContextProvider: React.FC = React.memo(({ children }) => {
    const current: boolean = window.localStorage.getItem('darkTheme') === 'true';
    const [dark, setDark] = useState<boolean>(current);

    // paints the app before it renders elements
    useLayoutEffect(() => {
        if (current) {
            setDark(true);
            applyTheme(darkTheme);
        }

        if (!current) {
            setDark(false);
            applyTheme(lightTheme);
        }
        // if state changes, repaints the app
    }, [current, dark]);

    const applyTheme = (theme: Array<string>) => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = theme.join(';');
    };

    const toggle = () => {
        setDark((prev) => !prev);
        window.localStorage.setItem('darkTheme', (!dark).toString());
    };

    return <ThemeContext.Provider value={{ setting: themes.dark, toggle }}>{children}</ThemeContext.Provider>;
});
