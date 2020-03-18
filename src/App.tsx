import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from './hooks/useTypeSelector'
import { decremet, fetchTodo, increment } from './redux/actions'

const App: React.FC = React.memo(() => {
    const counter = useTypeSelector(state => state.counter)
    const todos = useTypeSelector(state => state.todos)
    const dispatch = useDispatch()
    const [params, setParams] = React.useState({
        page: 1,
    })

    const changeInvalid = !(counter < 10 || counter > 0)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?page=${params.page}`)
            .then(response => response.json())
            .then(json => dispatch(fetchTodo(json)))
    }, [params])

    console.log('my todos: ', todos)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            {changeInvalid && <h2>Couter invalid to change value</h2>}
           
            <button onClick={() => dispatch(increment())}> (+) Increment</button>
            <button onClick={() => dispatch(decremet())}> (-) Decrement</button>

            <button onClick={() => setParams(prev => ({ ...prev, page: prev.page + 1 }))}>Load data</button>
            <div>
                <h2>Todo</h2>
            </div>
        </div>
    )
})

export default App
