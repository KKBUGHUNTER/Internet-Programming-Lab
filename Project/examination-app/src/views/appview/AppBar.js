import Cookies from 'js-cookie';

function AppBar({ parse }) {

    const Logout = () =>{
        Cookies.remove('token');
        window.location.href = '/';
    }

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
        btn:{
            position:"absolute",
            right:"70px",
            padding:"4px",
            backgroundColor:"red",
            border:"0",
            color:"white",
            fontWeight:"bold",
            borderRadius:"5px"
        }
    };

    return (
        <div style={style.appBar}>
            <b>Hello {parse.userId},</b>
            <button type="submit" onClick={Logout} style={style.btn}>LogOut</button>
            <a href="http://localhost:3000/profile">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile image" height="40px" style={style.profileImage} />
            </a>
        </div>
    );
}

export default AppBar;
