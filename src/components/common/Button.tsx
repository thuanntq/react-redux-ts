import React, { ButtonHTMLAttributes } from 'react';
import { COLORS, TEXT, ButtonType } from './../constants/colors';

type Props = {
    title: string;
    btnType: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = React.memo(({ title, btnType, ...props }) => {
    return (
        <button
            {...props}
            style={{
                ...props.style,
                backgroundColor: COLORS[btnType],
                color: TEXT[btnType],
                borderRadius: '5px',
            }}
        >
            {title}
        </button>
    );
});
