import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TodoInterface } from '../constants/types';
import { Button } from './../common/Button';
import { Input } from './../common/Input';

type Props = {
    todo: TodoInterface;
    current: boolean | undefined;
    callbackSuccess: (args: Partial<TodoInterface>) => void;
    setTodo: (args: TodoInterface | undefined) => void;
};

const App: React.FC<Props> = React.memo(({ todo, callbackSuccess, setTodo, current }) => {
    const [model, setModel] = React.useState<TodoInterface>(todo);
    const inputRef = React.createRef<HTMLInputElement>();

    const updateHandle = (id: number) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(model),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
            .then(response => response.json())
            .then((json: Partial<TodoInterface>) => {
                callbackSuccess(json);
                setTodo(undefined);
            });
    };

    const inputOnchangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        const { target } = event;
        setModel(prev => ({
            ...prev,
            title: target.value,
        }));
    };

    useEffect(() => {
        if (inputRef && current) {
            inputRef.current?.focus();
        }
    }, []);

    return (
        <div>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>

            {(!current) && (
                <span>
                    <Button
                        btnType="default"
                        title="Edit"
                        onClick={() => {
                            setTodo(todo)
                        }}
                        style={{ marginLeft: '10px' }}  
                    />

                    <Button btnType="warning" title="Delete" onClick={() => null} style={{ marginLeft: '10px' }} />
                </span>
            )}

            {current && (
                <div style={{ margin: '5px 0px 5px 30px' }}>
                    <Input ref={inputRef} type="text" value={model.title} onChange={inputOnchangeHandle} />

                    <Button
                        btnType="info"
                        title="Update"
                        onClick={() => updateHandle(todo.id)}
                        disabled={todo.title === model.title}
                        style={{ marginLeft: '10px' }}
                    />
                    <Button
                        btnType="default"
                        title="Cancel"
                        onClick={() => setTodo(undefined)}
                        style={{ marginLeft: '10px' }}
                    />
                </div>
            )}
        </div>
    );
});

export default App;
