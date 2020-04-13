import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import MainLayout from './MainLayout';

type Props = {
    layout?: React.FC;
    component: React.FC;
} & RouteProps;

export const RouteLayout: React.FC<Props> = React.memo(({ layout: Layout = MainLayout, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props}></Component>
                </Layout>
            )}
        />
    );
});

RouteLayout.defaultProps = {
    layout: MainLayout,
};
