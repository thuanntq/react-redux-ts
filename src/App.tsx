import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { PostListComponent } from './components/post';
import { TechComponent } from './components/tech';
import { ErrorBoundary } from './layouts/ErrorBoundary';
import { RouteLayout } from './layouts/RouteLayout';

const App: React.FC = React.memo(() => {

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Switch>
                    <RouteLayout path="/" exact component={PostListComponent} />
                    <RouteLayout path="/posts" exact component={PostListComponent} />
                    <RouteLayout path="/news" exact component={PostListComponent} />
                    <RouteLayout path="/tech" exact component={TechComponent} />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    );
});

export default App;
