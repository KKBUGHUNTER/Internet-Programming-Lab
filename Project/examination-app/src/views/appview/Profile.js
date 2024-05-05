// /src/views/appviews/Profile.js

import React from 'react';
import {useState, useEffect} from 'react';
import CookieHelper from '../utils/CookieHelper';

function Profile() {
    const [name, setName] = useState();
    const [regNo, setRegNo] = useState();
    const [score, setScore] = useState();
    const [coursesCompleted, setCoursesCompleted] = useState();
    const [courseNames, setCourseNames] = useState([]);

    useEffect(() => {
        const userId = CookieHelper.getUserId(); 
        setRegNo(userId);
        // console.log("data in useEffect: ", userId);
    }, []);
    
    useEffect(() => {
        if (regNo) {
            // console.log("load data", regNo);
            LoadData(); 
        }
    }, [regNo]);
    

    const LoadData = () => {
        console.log("load data", regNo);
        fetch(`http://localhost:7020/userDetails?userId=${regNo}`)
        .then(res => res.json())
        .then(data => {
            setName(data.username);
            setScore(data.score);
            setCoursesCompleted(data.courseCount);
            setCourseNames(data.courseList);
        })
        .catch(error => console.log(error))
    }
    
    const DeleteAccount = () =>{
        fetch(`http://localhost:7020/deleteUser?userId=${regNo}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.message === "DeleteSuccess") {
                // Redirect to the homepage if the deletion was successful
                CookieHelper.removeTokenCookie();
                window.location.href = '/signup';
            }
        })
        .catch(error => console.log(error));
    }

    const style = {
        container: {
            margin:"auto",
            padding: "30px",
            maxWidth: "600px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
        },
        header: {
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
        },
        detailItem: {
            marginBottom: "10px",
            fontSize: "16px",
            color: "#666",
        },
        courseList: {
            listStyleType: "none",
            padding: 0,
            marginTop: "10px",
        },
        courseItem: {
            marginBottom: "5px",
            paddingLeft: "20px",
            position: "relative",
            fontSize: "14px",
            color: "#444",
        },
        courseBullet: {
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#007bff",
        },
        delBtn:{
            backgroundColor:"red",
            border:"0",
            borderRadius:"8px",
            padding:"8px",
            fontWeight:"bold",
            fontSize:"14px",
            color:"white",
            marginLeft:"40%"
        }
    };

    return (
        <div style={style.container}>
            {/* <AppBar parse={{userId:regNo}}/> */}
            <div>
                <h2 style={style.header}>Profile</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile image" height="140px" />
                <br/>
                <br/>
                <div style={style.detailItem}>
                    <strong>Name:</strong> {name}
                </div>
                <div style={style.detailItem}>
                    <strong>Registration Number:</strong> {regNo}
                </div>
                <div style={style.detailItem}>
                    <strong>Score:</strong> {score}
                </div>
                <div style={style.detailItem}>
                    <strong>Courses Completed:</strong> {coursesCompleted}
                </div>
                {courseNames && (
                    <div style={style.detailItem}>
                        <strong>Course Lists:</strong>
                        <ul style={style.courseList}>
                            {courseNames.map((course, index) => (
                                <li key={index} style={style.courseItem}>
                                    <span style={style.courseBullet}></span>
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
             <button type="submit" onClick={DeleteAccount} style={style.delBtn}>Delete Account</button> 
        </div>
    );
}

export default Profile;