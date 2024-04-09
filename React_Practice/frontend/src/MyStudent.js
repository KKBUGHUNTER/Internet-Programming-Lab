function MyStudent({names}) {
    
    return (<div>

        <h3>Student List</h3>
        <ol>
            {names.map(i =>{
                return <li>{i.name}</li>
             })}   
        </ol>
    </div>
    );
}

export default MyStudent;