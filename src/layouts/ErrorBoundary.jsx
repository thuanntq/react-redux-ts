import React from 'react';

export class ErrorBoundary extends React.Component {
    static defaultProps = {
        fallback: <h1>Something went wrong.</h1>,
    };
    state = { hasError: false };

    // eslint-disable-next-line react/sort-comp
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch() {
        // console.error(errorInfo);
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children, fallback } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return fallback;
        }

        return children;
    }
}
