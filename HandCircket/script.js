var total = 0;
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    
    var machineVal = 0;

    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;

    var synthesis = window.speechSynthesis;

    var outputDiv = document.getElementById('user');
    var machineOutputDiv = document.getElementById('machine');

        document.getElementById('startButton').onclick = function () {
        recognition.start();

        setTimeout(function () {
            recognition.stop();
        }, 3000);
    };
    
    recognition.onresult = function (event) {
        var interimTranscript = '';
        var finalTranscript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        outputDiv.textContent = finalTranscript.toLocaleLowerCase();
        var words = finalTranscript.split(" ");
        var key = words[1];
        var playerVal = 0;
        if (key == "one" || key == 1) {
            document.getElementById("player").src = "images/1.png";
            playerVal = 1;
        }
        else if (key == "two" || key == 2|| key == "to") {
            document.getElementById("player").src = "images/2.png";
            playerVal = 2;}
        else if (key == "three" || key == 3) {
            document.getElementById("player").src = "images/3.png";
            playerVal = 3;}
        else if (key == "four"|| key == "for" || key == 4) {
            document.getElementById("player").src = "images/4.png";
            playerVal = 4;}
        else if (key == "five" || key == 5) {
            document.getElementById("player").src = "images/5.png";
            playerVal = 5;}
        else if (key == "six" || key == 6) {
            document.getElementById("player").src = "images/6.png";
            playerVal = 6;}
        else{
            document.getElementById("player").src = "";
            playerVal = 0;}
        
        let min = 1;
        let max = 6;
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNum);
        if (randomNum == 1) 
            document.getElementById("playerM").src = "images/1.png";
        else if (randomNum == 2) 
            document.getElementById("playerM").src = "images/2.png";
        else if (randomNum == 3) 
            document.getElementById("playerM").src = "images/3.png";
        else if (randomNum == 4) 
            document.getElementById("playerM").src = "images/4.png";
        else if (randomNum == 5) 
            document.getElementById("playerM").src = "images/5.png";
        else if (randomNum == 6) 
            document.getElementById("playerM").src = "images/6.png";
        else
            document.getElementById("playerM").src = "";

        total += playerVal;
        document.getElementById('point').innerHTML = total;
        console.log("Total: " + total);
    };
    // document.getElementById('speakButton').onclick = function () {
    //     var inputText = document.getElementById('inputText').value;
    //     var utterance = new SpeechSynthesisUtterance(inputText);
    //     synthesis.speak(utterance);
    // };


    
    
} else {
    alert('Speech recognition not supported in your browser.');
}

