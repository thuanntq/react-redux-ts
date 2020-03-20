import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import { useScrollHeader } from './hooks/useScrollHeader';

import { TodoDetailComponent } from './components/todo/Detail';
import { TodoListComponent } from './components/todo/List';
import { CounterComponent } from './components/counter';

const App: React.FC = React.memo(() => {
    // const style = useScrollHeader();
    
    return (
        <BrowserRouter>
            <div className="header">
                <Link to="/todos">List todo</Link>
            </div>

            <CounterComponent />

            <Switch>
                <Route path="/todos" exact component={TodoListComponent} />
                <Route path="/todos/:id" component={TodoDetailComponent} />
            </Switch>
        </BrowserRouter>
    );
});

export default App;
