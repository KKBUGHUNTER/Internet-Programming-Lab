import AppBar from './AppBar';
import CourseBox from "./CourseBox";

function Dashboard(parse){

    const style={
        master:{
            margin:"0",
            padding:"0",
            border:"0"
        },
    }

    return( 
    <div style={style.master}>
        <AppBar />
        <CourseBox data = {{testName: "Python Programming",
    testDescription: "Python programming List, Set, Dict, Exception Handling, .",
    testDuration: "8 weeks",
    score: "100 points"}}/>

    </div>
    );
}


export default Dashboard;
