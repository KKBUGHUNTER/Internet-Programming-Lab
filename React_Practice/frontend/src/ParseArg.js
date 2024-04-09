// Type 2
function ParseName({ myName }) {
    
    return (<div>
        <h1>Hello {myName} </h1>
    </div>);
}

// Type 1
function ParseArg({name}) {
    
    return (<div>
        <h1>Hello {name} </h1>
        <ParseName myName="Cyber Security"/>
    </div>);
}

export default ParseArg;