import avatar from "./images/my-photo-half.png";

function App(name) {
  var person = {
    name: "Karthikeyan",
    task: ["Final Year project.", "Get Internship in ZoHo.", "Get Place in Google."],
    theme: {
      backgroundColor: "rgba(255, 143, 145, 0.91)",
      color: "rgba(65, 82, 228, 0.91)",
      width: "350px",
      height: "500px",
      borderRadius: "20px",
      margin: "10px",
      textAlign: "center",
    }
  };

  const avatarStyle = {
    height: "200px", 
    width: "200px", 
    borderRadius: "10px",
  };

  const headingStyle = {
    backgroundColor: "black",
    color: "white", 
    padding: "10px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  }

  const listStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  }

  const btnStyle = {
    backgroundColor: "rgba(65, 228, 112, 0.91)",
    border: "0",
    padding: "10px",
    fontWeight: "bold",
    fontSize:"18px",
  }

  return (
    <div style={person.theme}>
      <h1 style={headingStyle}>{person.name}</h1>
      <img src={avatar} alt={`${name} profile pic`} style={avatarStyle} />
      <hr/>
        {person.task.map((task, index) => (
          <p key={index} style={listStyle}>{task}</p>
        ))}
      <button style={btnStyle}> All Complet </button>
    </div>
  );
}

export default App;
