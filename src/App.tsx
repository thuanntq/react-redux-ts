import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { CounterComponent } from './components/counter';
import { PostListComponent } from './components/post/List';

const App: React.FC = React.memo(() => {
    return (
        <BrowserRouter>
            <div className="header">
                <Link to="/posts">List Post</Link>
            </div>

            <CounterComponent />

            <Switch>
                <Route path="/posts" exact component={PostListComponent} />
            </Switch>
        </BrowserRouter>
    );
});

export default App;
