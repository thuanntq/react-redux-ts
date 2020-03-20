export type ButtonType = 'default' | 'info' | 'warning';

export type MyColor = Record<ButtonType, string>;

export const COLORS: MyColor = {
    default: '#e5e5e5',
    info: '#8adbff',
    warning: '#ffbebe',
};

export const TEXT: MyColor = {
    default: '#000',
    info: '#000',
    warning: '#000',
};
