
import { useState } from "react";

function Example2() {
    const [count, setCount] = useState(10);

    function increment() {
        setCount((prev) => prev + 1);
    }

    function decrement() {
        setCount((prev) => prev - 1); // Provide the new count value
    }

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

function StateExample() {
    const [name, setName] = useState("React");

    const changeName = () => {
        setName("ReactJS");
    }
    return (<div>

        <h1>{name}</h1>
        <button onClick={changeName}>click</button>
        <Example2 />
    </div>
    );
}

export default StateExample; 