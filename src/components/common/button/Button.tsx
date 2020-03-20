import React, { ButtonHTMLAttributes } from 'react';

type ButtonType = 'default' | 'info' | 'warning';

type Props = {
    title: string;
    btnType: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = React.memo(({ title, btnType, ...props }) => {
    let color = '';
    let backgroundColor = '';

    switch (btnType) {
        case 'info':
            backgroundColor = '#8adbff';
            color = '#000';
            break;
        case 'warning':
            backgroundColor = '#ffbebe';
            color = '#000';
            break;
        case 'default':
        default:
            backgroundColor = '#e5e5e5';
            color = '#000';
            break;
    }
    console.log({
        ...props.style,
        backgroundColor,
        color,
        borderRadius: '5px',
    });

    return (
        <button
            {...props}
            style={{
                ...props.style,
                backgroundColor,
                color,
                borderRadius: '5px',
            }}
        >
            {title}
        </button>
    );
});
