function AppBar({ parse }) {
    const style = {
        appBar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            width: "100%",
            backgroundColor: "#1F85DE",
            color: "white",
            padding: "5px",
        },
        profileImage: {
            marginRight: "10px",
        },
    };

    return (
        <div style={style.appBar}>
            <b>Hello {parse.userId},</b>
            <a href="http://localhost:3000/profile">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile image" height="40px" style={style.profileImage} />
            </a>
        </div>
    );
}

export default AppBar;
