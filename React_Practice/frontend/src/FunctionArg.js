import { useState } from "react";

function Function2({getName}) {
    
    return (
        <input
        type="text"
        onInput={getName}
        />
    );
}

function FunctionArg(event) {
    const [name, setName] = useState("");
    const readName = () => {
        setName(event.target.value);
        console.log(name);
    }
    return (
        <div>
            <Function2 getName={readName} />
        </div>
    );
}

export default FunctionArg;
