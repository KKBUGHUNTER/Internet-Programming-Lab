var a = 10;
document.write(a + " Type: " + typeof(a) +'<br>');
a = "hello world";
document.write(a + " Type: " + typeof(a) +'<br>');
a = 12.45;
document.write(a + " Type: " + typeof(a) +'<br>');
a = true;
document.write(a + " Type: " + typeof(a) +'<br>');
var b;
document.write(b + " Type: " + typeof(b) +'<br>');

function func1() {
    document.getElementById('heading').innerHTML = "welcome to JavaScript";
}

function func2(){
    var b = window.prompt("Enter the value 1:");
    var c = window.prompt("Enter the value 2: ");
    res = parseInt(b)+ parseInt(c);
    window.alert("Value of B = " + res);
}

function lighton() {
    document.getElementById('light').src = "images/on.jpg";
}

function lightoff(){
    document.getElementById('light').src = "images/off.jpg";
}

function printName(){
    var name = document.getElementById('name').value;
    document.getElementById('content1').innerHTML = "Hello " + name;
}
function printDegree(){
    var list = document.querySelector("input[name='deg']:checked");

    if(list){
        var value = list.value;
        document.getElementById('content2').innerHTML = value;
    }
}

function printHobby() {
    var hobbyList = document.querySelectorAll("input[name='hobby']:checked");
    var list = "";
    for(var i = 0; i < hobbyList.length; i++) {
        list += hobbyList[i].value + ', ';
    }
    document.getElementById('content3').innerHTML = "Selected hobbies: " + list;
}


function printBookType(){
    var bookType = document.getElementById('book').value;
    document.getElementById('content4').innerHTML =bookType + " books are great book to read";
}