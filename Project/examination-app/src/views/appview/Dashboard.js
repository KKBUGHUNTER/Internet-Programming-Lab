import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import AppBar from './AppBar';
import CourseBox from "./CourseBox";


function Dashboard() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const userId = token.substring(0, 2); 
      console.log(userId);
      setUserDetails(userId);
    //   fetch("http://localhost:7020" + '/user/' + userId, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     setUserDetails(data); // Set user details state
    //   })
    //   .catch(error => console.error('Error fetching user details:', error));
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
      {userDetails && (
        <div>
          <CourseBox data={{
            testName: "Python Programming",
            testDescription: "Python programming List, Set, Dict, Exception Handling, .",
            testDuration: "8 weeks",
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