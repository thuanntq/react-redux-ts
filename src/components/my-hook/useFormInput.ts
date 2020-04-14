import { useState } from 'react';

export const useFormInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
};
