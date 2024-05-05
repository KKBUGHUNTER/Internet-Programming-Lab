import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import CourseBox from "./CourseBox";
import CookieHelper from '../utils/CookieHelper';


function Dashboard() {
  const [userDetails, setUserDetails] = useState();
  const [testData, setTestData] = useState();

  useEffect(() => {
    const userId = CookieHelper.getUserId(); 
    if (userId) {
      LoadUserData(userId);
      LoadTestData();
    }
    else{
      window.location.href = '/';
    }
  }, []);

  function LoadTestData(){
    fetch(`http://localhost:7020/test`)
        .then(res => res.json())
        .then(data => {
            setTestData(data);
        })
        .catch(error => console.log(error))
  }

  function LoadUserData(regNo){
    fetch(`http://localhost:7020/userDetails?userId=${regNo}`)
        .then(res => res.json())
        .then(data => {
            setUserDetails(data.username);
        })
        .catch(error => console.log(error))
  }

  const style = {
    master: {
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      flexWrap: "wrap",
    },
  };

  const handleTakeTest = (courseName) => {
    console.log(`Clicked on ${courseName}`);
    window.location.href = `/test?Subject=${courseName}`;
  };

  return (
    <div>
      <AppBar parse={{userId:userDetails}} />
      <h1>Take Your New Test <img src="https://good-samaritan-school.com/wp-content/uploads/2021/05/new_blink_gif-1.gif" alt="user profile" height="25px" /> </h1>
      <br/>
      <div style={style.master}>
      {testData && testData.map((test, index) => (
        <CourseBox 
          key={index}
          data={{
            testName: test.testName,
            testDescription: test.testDesc,
            score: test.totalNoOfQues
          }} 
          onTakeTest={handleTakeTest}
        />
      ))}
      </div>
      {/* {questionSet && <MainTestPage questionSet={questionSet} />} */}
    </div>
  );
}

export default Dashboard;
