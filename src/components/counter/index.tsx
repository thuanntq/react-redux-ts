import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { decremet, increment } from 'src/redux/actions';

export const CounterComponent: React.FC = React.memo(() => {
    const headRef = React.createRef<HTMLHeadingElement>();

    const counter = useTypeSelector((state) => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        let currentTimer: NodeJS.Timeout;

        const setHeadingColor = (color: string) => {
            headRef.current && headRef.current.style.setProperty('color', color);
        };

        const applyEffect = () => {
            setHeadingColor('red');
            currentTimer = setTimeout(() => {
                setHeadingColor('black');
            }, 2e2);
        };

        applyEffect();
        
        return () => {
            clearTimeout(currentTimer);
        };
    }, [counter, headRef]);

    return (
        <div>
            <h1 ref={headRef}>Counter: {counter}</h1>

            <button onClick={() => dispatch(increment())}> (+) Increment</button>
            <button onClick={() => dispatch(decremet())}> (-) Decrement</button>
        </div>
    );
});
