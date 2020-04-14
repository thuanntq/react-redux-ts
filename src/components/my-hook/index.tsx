import React, { useState } from 'react';
import { useResizeWidth } from './useResizeWidth';
import { useDocumentTitle } from './useDocumentTitle';
import { useFormInput } from './useFormInput';

declare global {
    interface Window {
        attribute: any;
    }
}

export const MyHook: React.FC = React.memo(() => {
    // su dung hook useState
    const [backgourd, setBackgourd] = useState<string>('#fff');

    // su dung custom hook
    const name = useFormInput('thuan');

    // su dung hook useEffect, custom hook
    const width = useResizeWidth();

    useDocumentTitle(name.value + ' set color is ' + backgourd);

    const randomColor = (): string => '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <input {...name} />
                <strong>{width}px</strong>
                <button onClick={() => setBackgourd(randomColor())}>Change color</button>
            </div>
            <h2 style={{ backgroundColor: backgourd, width: '300px', height: '300px' }}>Hello, MyHook</h2>
        </div>
    );
});
