import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from './../../hooks/useTypeSelector';
import { decremet, increment } from './../../redux/actions';

export const CounterComponent: React.FC = React.memo(() => {
    const headRef = React.createRef<HTMLHeadingElement>();

    const counter = useTypeSelector(state => state.counter);
    const dispatch = useDispatch();

    const setHeadingColor = (color: string) => {
        headRef.current && headRef.current.style.setProperty('color', color);
    };

    const applyEffect = () => {
        setHeadingColor('red');
        setTimeout(() => {
            setHeadingColor('black');
        }, 2e2);
    };

    useEffect(() => {
        applyEffect();
        return () => applyEffect();
    }, [counter]);

    return (
        <div>
            <h1 ref={headRef}>Counter: {counter}</h1>

            <button onClick={() => dispatch(increment())}> (+) Increment</button>
            <button onClick={() => dispatch(decremet())}> (-) Decrement</button>
        </div>
    );
});
