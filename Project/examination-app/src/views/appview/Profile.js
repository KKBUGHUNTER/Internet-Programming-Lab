import React from 'react';
import AppBar from './AppBar';

function Profile({ name, regNo, score, coursesCompleted, courseNames }) {
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
    };

    return (
        <div style={style.container}>
            <AppBar />
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
            </div>
        </div>
    );
}

export default Profile;