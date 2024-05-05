import React from 'react';

function CourseBox({ data, onTakeTest }) {
    const style = {
        master: {
            margin: "10px",
            padding: "10px", 
            border: "0",
            width: "400px",
            border:'3px solid #DE1F85',
            borderRadius: "10px",
        },
        btn:{
            padding:"5px",
            width:"100px",
            border:"0",
            borderRadius:'5px',
            backgroundColor:"#85DE1F",
            float:'right'
        }
        
    };

    const handleTakeTest = () => {
        onTakeTest(data.testName);
    };

    return (
        <div style={style.master}>
            <h2 style={{color:"darkgreen"}}>{data.testName}</h2>
            <small>{data.testDescription}</small> <br/> <br/>
            <span><b>Score: <i>{data.score}</i></b></span> <br />
            <button onClick={handleTakeTest} style={style.btn}> <big><b >Take Test</b></big></button>
            <br />
            <br />
        </div>
    );
}

export default CourseBox;
