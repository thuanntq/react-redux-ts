import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTypeSelector } from './../../hooks/useTypeSelector';
import { decremet, fetchTodo, increment } from './../../redux/actions';

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
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    const nextPage = () => {
        setParams(prev => ({
            ...prev,
            _start: prev._start + TODO_LIMIT,
        }));
    };

    const prevPage = () => {
        if(params._start < TODO_LIMIT){
            return;
        }
        setParams(prev => ({
            ...prev,
            _start: prev._start - TODO_LIMIT,
        }));
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${params._limit}&_start=${params._start}`)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchTodo(json));
                setIsLoading(false);
            });
    }, [params]);

    return (
        <div>
            <h1>Counter: {counter}</h1>

            <button onClick={() => dispatch(increment())}> (+) Increment</button>
            <button onClick={() => dispatch(decremet())}> (-) Decrement</button>

            <div>
                <h2>Todo</h2>
                <button disabled={isLoading || params._start < TODO_LIMIT} onClick={() => prevPage()}>Prev page</button>
                <button disabled={isLoading} onClick={() => nextPage()}>Next page</button>

                {isLoading && <p>Loading...</p>}

                {!isLoading &&
                    todos.todos.map(todo => (
                        <p key={todo.id}>
                            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                        </p>
                    ))}
            </div>
        </div>
    );
});

export default App;
