import React, { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    return <input ref={ref} style={{ width: '300px', padding: '5px', ...props.style }} {...props} />;
});
