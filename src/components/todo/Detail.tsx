import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { TodoInterface } from '../constants/types';

interface MatchParams {
    id: string;
}

type Props = RouteComponentProps<MatchParams>;

export const TodoDetailComponent: React.FC<Props> = React.memo(({ match, history }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    const [todo, setTodo] = React.useState<TodoInterface>();

    const todoId = match.params.id;

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(res => res.json())
            .then(json => {
                setTodo(json);
                setIsLoading(false);
            });
    }, [todoId]);

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}

            {!isLoading && <h1>{todo?.title ?? ''}</h1>}

            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
});
