import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from './hooks/useTypeSelector';
import { decremet, fetchTodo, increment } from './redux/actions';

const TODO_LIMIT = 10;

type ParamState = {
    _start: number;
    _limit: number;
};

const App: React.FC = React.memo(() => {
    const counter = useTypeSelector(state => state.counter);
    const todos = useTypeSelector(state => state.todos);
    const dispatch = useDispatch();

    const [params, setParams] = React.useState<ParamState>({
        _start: 0,
        _limit: TODO_LIMIT,
    });

    const nextPage = () => {
        setParams(prev => ({
            _start: prev._start + TODO_LIMIT,
            _limit: prev._limit + TODO_LIMIT,
        }));
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${params._limit}&_start=${params._start}`)
            .then(res => res.json())
            .then(json => dispatch(fetchTodo(json)));
    }, [params]);

    return (
        <div>
            <h1>Counter: {counter}</h1>

            <button onClick={() => dispatch(increment())}> (+) Increment</button>
            <button onClick={() => dispatch(decremet())}> (-) Decrement</button>

            <div>
                <h2>Todo</h2>
                <button onClick={() => nextPage()}>Next page</button>

                {todos.todos.map(todo => (
                    <p>
                        <a href="#">{todo.title}</a>
                    </p>
                ))}
            </div>
        </div>
    );
});

export default App;
