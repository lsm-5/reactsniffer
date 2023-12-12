import { useState } from 'react';

export const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const ChildComponent = () => (
        <div>Hello World</div>
    );

    return (
        <div>
            <ChildComponent />
            <button onClick={() => setCount(count + 1)}>Count me</button>
        </div>
    );
};