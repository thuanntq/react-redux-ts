import React from 'react';
import { CounterComponent } from '../counter';
export const TechComponent: React.FC = React.memo(() => {
    return (
        <div>
            <h2>TechComponent</h2>

            <CounterComponent />
        </div>
    );
});
