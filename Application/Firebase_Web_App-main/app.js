
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""

};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();


function queryFirebaseToCreate(path, value) {
    database.ref("/counter").once('value').then(function(snapshot) {
        var counter = snapshot.val() || 0; // If counter doesn't exist, default to 0
        counter++;
        database.ref("/counter").set(counter);
        database.ref("/path" + "/" + counter).set(path);

        database.ref(path).set(value);
    });
}


function CreateNewPath() {
    // Blur the current page
    // document.body.style.filter = "blur(5px)";
    // Create a div element for the new path input
    var newPathDiv = document.createElement("div");
    newPathDiv.style.padding = "20px";
    newPathDiv.style.position = "absolute";
    newPathDiv.style.top = "50%";
    newPathDiv.style.left = "50%";
    newPathDiv.style.transform = "translate(-50%, -50%)";
    newPathDiv.style.backgroundColor = "#fff";
    newPathDiv.style.border = "1px solid #ccc";
    newPathDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    newPathDiv.style.zIndex = "9999";

    var pathInput = document.createElement("input");
    pathInput.setAttribute("type", "text");
    pathInput.setAttribute("placeholder", "Enter the path...");
    pathInput.style.marginBottom = "10px";
    pathInput.style.padding = "10px";
    newPathDiv.appendChild(pathInput);

    var h1 = document.createElement('b');
    var h1_txt = document.createTextNode(':');
    h1.style.fontSize = "35px";
    h1.style.padding = "5px";
    h1.appendChild(h1_txt);
    newPathDiv.appendChild(h1)

    var valueInput = document.createElement("input");
    valueInput.setAttribute("type", "text");
    valueInput.setAttribute("placeholder", "Enter the Value");
    valueInput.style.marginBottom = "10px";
    valueInput.style.padding = "10px";
    newPathDiv.appendChild(valueInput);

    var spc = document.createElement('b');
    var spc_txt = document.createTextNode('   ');
    spc.style.fontSize = "35px";
    spc.style.padding = "5px";
    spc.appendChild(spc_txt);
    newPathDiv.appendChild(spc)

    var createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.style.backgroundColor = "green";
    createButton.style.color = "white";
    createButton.style.padding = "10px";
    createButton.style.borderRadius = "10px";
    createButton.style.border = "0px";
    var error = document.createElement('p');
    createButton.addEventListener("click", function () {
        if (pathInput.value.includes('/')) {
            console.log("error");
            var error_txt = document.createTextNode("Path cannot contain '/'")
            error.style.color = "red";
            error.appendChild(error_txt);
            newPathDiv.appendChild(error);
        }
        else if (pathInput.value =='' || valueInput.value =="" || pathInput.value ==' ' || valueInput.value ==" ") {
            console.log("error");
            var error_txt = document.createTextNode("Field can not be Empty ")
            error.style.color = "red";
            error.appendChild(error_txt);
            newPathDiv.appendChild(error);
        }
        else {
            queryFirebaseToCreate(pathInput.value, valueInput.value);
            document.body.removeChild(newPathDiv);
        }
    });

    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.style.padding = "10px";
    cancelButton.style.marginLeft = "10px";
    cancelButton.style.borderRadius = "10px";
    cancelButton.style.border = "0px";
    cancelButton.style.backgroundColor = "red";
    cancelButton.addEventListener("click", function () {
        document.body.removeChild(newPathDiv);
    });

    newPathDiv.appendChild(createButton);
    newPathDiv.appendChild(cancelButton);
    document.body.appendChild(newPathDiv);
}

function loadPage() {
    console.log("Start")
}



// Read Data
// database.ref("/s1").on("value", function (snapshot) {
//     var data = snapshot.val();
//     document.getElementById("p1").innerHTML = data;
// });

// // Write and Update data
// function SendData() {
//     var data = document.getElementById('v1');
//     database.ref("/s1").set(data.value);
//     document.getElementById('v1').value = "";
// }

// // Delete data
// function DeletePath() {
//     var path = document.getElementById('v1').value;
//     database.ref(path).remove().then(function () {
//             document.getElementById('p1').innerHTML = path + " removed successfully!";
//     }).catch(function (error) {
//             document.getElementById('p1').innerHTML = "Error removing path /s1:", error;
//     });
// }

