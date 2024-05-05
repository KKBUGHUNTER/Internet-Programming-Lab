function CourseBox({ data }) {

    const style = {
        master: {
            margin: "0",
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

    return (
        <div style={style.master}>
            <h2>{data.testName}</h2>
            <big>{data.testDescription}</big>
            <small>Score: {data.score}</small> <br />
            <button  type="submti" style={style.btn}> <big><b >Start Test</b></big></button>
            <br />
            <br />
        </div>
    );
}

export default CourseBox;

