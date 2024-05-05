import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import AppBar from './AppBar';
import CourseBox from "./CourseBox";
import CookieHelper from '../utils/CookieHelper';


function Dashboard() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const userId = CookieHelper.getUserId(); 
    if (userId) {
      setUserDetails(userId);
    }
    else{
      window.location.href = '/';
    }
  }, []);

  const style = {
    master: {
      margin: "0",
      padding: "0",
      border: "0"
    },
  };

  return (
    <div style={style.master}>
      {/* <h1>Hello {userDetails}</h1> */}
      <AppBar parse={{userId:userDetails}} />
      <h1>Take Your New Test <img src="https://good-samaritan-school.com/wp-content/uploads/2021/05/new_blink_gif-1.gif" height="25px" /> </h1>
      {userDetails && (
        <div>
          <CourseBox data={{
            testName: "Python Programming",
            testDescription: "Python programming List, Set, Dict, Exception Handling, .",
            score: "100 points"
          }} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;

/*

*/