var ISPLAY = true;

var x = 0;
var y = 0;
var userScore = 0;
var machineScore = 0;
function display1(){
    x = machineNo();
    y = 1;
    document.getElementById("playerM").src = 'images/'+x+".png";
    var img = document.getElementById('player');
    img.src = 'images/1.png';  
    if(ISPLAY == true){
        setTimeout(function() {
            img.src = 'images/batsman.png';
            document.getElementById("playerM").src = 'images/bowler.png';
        },1500);
    }
    else{
        setTimeout(function() {
            img.src = 'images/bowler.png';
            document.getElementById("playerM").src = 'images/batsman.png';
        },1500);
    }
    check();
}
function display2(){
    x = machineNo();
    y = 2;
    document.getElementById("playerM").src = 'images/'+x+".png";
    var img = document.getElementById('player');
    img.src = 'images/2.png';  
    if(ISPLAY == true){
        setTimeout(function() {
            img.src = 'images/batsman.png';
            document.getElementById("playerM").src = 'images/bowler.png';
        },1500);
    }
    else{
        setTimeout(function() {
            img.src = 'images/bowler.png';
            document.getElementById("playerM").src = 'images/batsman.png';
        },1500);
    }
    check();
}
function display3(){
    x = machineNo();
    y = 3;
    document.getElementById("playerM").src = 'images/'+x+".png";
    var img = document.getElementById('player');
    img.src = 'images/3.png';  
    if(ISPLAY == true){
        setTimeout(function() {
            img.src = 'images/batsman.png';
            document.getElementById("playerM").src = 'images/bowler.png';
        },1500);
    }
    else{
        setTimeout(function() {
            img.src = 'images/bowler.png';
            document.getElementById("playerM").src = 'images/batsman.png';
        },1500);
    }
    check();
}
function display4(){
    x = machineNo();
    y = 4;
    document.getElementById("playerM").src = 'images/'+x+".png";
    var img = document.getElementById('player');
    img.src = 'images/4.png';  
    if(ISPLAY == true){
        setTimeout(function() {
            img.src = 'images/batsman.png';
            document.getElementById("playerM").src = 'images/bowler.png';
        },1500);
    }
    else{
        setTimeout(function() {
            img.src = 'images/bowler.png';
            document.getElementById("playerM").src = 'images/batsman.png';
        },1500);
    }
    check();
}
function display5(){
    x = machineNo();
    y = 5;
    document.getElementById("playerM").src = 'images/'+x+".png";
    var img = document.getElementById('player');
    img.src = 'images/5.png';  
    if(ISPLAY == true){
        setTimeout(function() {
            img.src = 'images/batsman.png';
            document.getElementById("playerM").src = 'images/bowler.png';
        },1500);
    }
    else{
        setTimeout(function() {
            img.src = 'images/bowler.png';
            document.getElementById("playerM").src = 'images/batsman.png';
        },1500);
    }
    check();
}
function display6(){
    x = machineNo();
    y = 6;
    document.getElementById("playerM").src = 'images/'+x+".png";
    var img = document.getElementById('player');
    img.src = 'images/6.png';  
    if(ISPLAY == true){
        setTimeout(function() {
            img.src = 'images/batsman.png';
            document.getElementById("playerM").src = 'images/bowler.png';
        },1500);
    }
    else{
        setTimeout(function() {
            img.src = 'images/bowler.png';
            document.getElementById("playerM").src = 'images/batsman.png';
        },1500);
    }
    check();
}
function machineNo(){
    var y = Math.floor(Math.random() *6 ) + 1;
   return y;
}

function check() {
    if(x==y){
        alert(" out with " +(userScore)+ " runs" );
        ISPLAY = false;
        machineScore=0;
        playerSwitch();
    }
    else{
        if(ISPLAY == true){
            userScore += y;
            document.getElementById("player-run").innerHTML=userScore;
        }
        else{
            machineScore += x;
            document.getElementById("machine-run").innerHTML=machineScore;
            if(machineScore > userScore){
                finalResult();
            }
            if(x == y && machineScore <= userScore ){
                alert("Computer out you Win");
            }
        }
    }
}
function playerSwitch(){
    if(ISPLAY == false){
        console.log("user switched");
        document.getElementById("player-pos").innerHTML="Bowling";
        document.getElementById("player").src='images/bowler.png';
        display1();
        userScore -= 1;
        document.getElementById("machine-run").innerHTML=0;
        machineScore=0;
        document.getElementById("machine-pos").innerHTML="Batting";
        setTimeout(function() {
            machineScore=0;
            document.getElementById("playerM").src = 'images/batsman.png';
        },1500);
       
    }
    else{
        document.getElementById("player-run").innerHTML = 0;
    }
}
function finalResult(){
    alert("You lose");
}
