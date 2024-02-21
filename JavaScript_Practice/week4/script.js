function getValue(){
    var ind = document.getElementById('r1').value;
    var img = new Array('images/image1.jpeg','images/image2.jpeg','images/image3.jpeg','images/image4.jpeg')
    document.getElementById('img1').src=img[ind-1];
}

function getTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var time = h + " : "+ m + " : " + s ;
    document.getElementById('time').innerHTML = time;
}
setInterval(getTime,1000)



