import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import TodoDetailComponent from './components/todo/Detail';
import TodoListComponent from './components/todo/List';

const App: React.FC = React.memo(() => {
    return (
        <BrowserRouter>
            <Link to="/todos">List todo</Link>

            <Switch>
                <Route path="/todos" exact component={TodoListComponent} />
                <Route path="/todos/:id" component={TodoDetailComponent} />
            </Switch>
        </BrowserRouter>
    );
});

export default App;
