
// Question 1
function MenuOpt() {
            var ele = document.getElementById('menu');
            console.log(ele.style.display);

            if (ele.style.display == "block") {
                ele.style.display = "none";
            }
            else {
                ele.style.display = "block";
            }
}

// Question 2
function myFunction() {
    document.getElementById('btn').addEventListener("click", displayContent());
}
function displayContent() {
    document.getElementById("demo").innerHTML = "Hello World";
}

// Question 3
var newP = document.createElement('p');
var newP_txt = document.createTextNode("new Paragraph.");
newP.appendChild(newP_txt);
var oldP = document.getElementById('p1');
oldP.appendChild(newP);
