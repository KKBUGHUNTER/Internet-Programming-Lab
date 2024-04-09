import MyStudent from './MyStudent';

function JsxMapExample() {
    const data = [
        {name:"A. Karthikeyan", email:"karthikeyan@gmail.com"},
        {name:"S. Iray", email:"iray@gmail.com"},
        {name:"K. Muthu", email:"muthu@gmail.com"},
    ];
    return (
        <MyStudent names={data} />
    );
}

export default JsxMapExample;