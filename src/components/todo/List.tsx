import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TodoInterface } from '../constants/types';
import { useTypeSelector } from './../../hooks/useTypeSelector';
import { fetchTodo, updateTodo } from './../../redux/actions';
import TodoItem from './Item';
import { useScrollHeader } from '../../hooks/useScrollHeader';

const TODO_LIMIT = 10;

type ParamState = {
    _start: number;
    _limit: number;
};

export const TodoListComponent: React.FC = React.memo(() => {
    const todos = useTypeSelector(state => state.todos);
    const dispatch = useDispatch();

    const [model, setModel] = React.useState<TodoInterface>();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    const [params, setParams] = React.useState<ParamState>({
        _start: 0,
        _limit: TODO_LIMIT,
    });

    const nextPage = () => {
        dispatch(fetchTodo([]));
        setParams(prev => ({ ...prev, _start: prev._start + TODO_LIMIT }));
    };

    const prevPage = () => {
        if (params._start < TODO_LIMIT) {
            return;
        }
        dispatch(fetchTodo([]));
        setParams(prev => ({ ...prev, _start: prev._start - TODO_LIMIT }));
    };

    const callbackUpdateSucess = React.useCallback(
        (args: Partial<TodoInterface>) => {
            dispatch(
                updateTodo(
                    todos.todos.map(item => {
                        if (item.id === model?.id) {
                            return { ...item, ...args };
                        }
                        return item;
                    }),
                ),
            );
        },
        [dispatch],
    );

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
            <h2>Todo</h2>
            <div>
                <button disabled={isLoading || params._start < TODO_LIMIT} onClick={() => prevPage()}>
                    Prev page
                </button>
                <button disabled={isLoading} onClick={() => nextPage()}>
                    Next page
                </button>
            </div>

            {isLoading && <p>Loading...</p>}

            {todos?.todos?.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    callbackSuccess={callbackUpdateSucess}
                    current={model?.id===todo.id}
                    setTodo={setModel}
                />
            ))}
        </div>
    );
});
