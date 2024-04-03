var root = document.getElementById("root");

function sum() {
    var a = parseInt(document.getElementById('a').value);
    var ran = Math.floor(Math.random() * 2);
    var res = document.getElementById('res');
    
    if (ran == a) 
        res.innerHTML = "True";
    else res.innerHTML = "False";
}

var ols = document.querySelectorAll("#root ol")
ols.forEach(function (list) {
    var items = list.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++){
        console.log(items[i].textContent);
        if (items[i].textContent == "cyber") {
            items[i].style.backgroundColor = "red";
            items[i].style.color = "green";
        }        
    }
})





                                                    