// • Add a new <p> element before the Goals when the web page is loaded
function addPtag(){
    var newP = document.createElement("p");
    var newP_txt = document.createTextNode("...HI IAM NEW P TAG...");
    newP.appendChild(newP_txt);
    var loc = document.getElementById('newP');
    loc.appendChild(newP);
}

// • When updateGoals button is clicked, new goal has to be inserted as last one
function addGoal(){
    var loc = document.getElementById('last');
    var newLi = document.createElement('li');
    var newLi_txt = document.createTextNode('Become Big Hacker.') 
    newLi.appendChild(newLi_txt);
    loc.appendChild(newLi);
}

// • When updateHobbies button is clicked, new Hobby is to be inserted as the third one, with different background color.
function addHobby(){
    var loc = document.getElementById('mid');
    var newLi = document.createElement('li');
    var newLi_txt = document.createTextNode('Learn Networking.') 
    newLi.appendChild(newLi_txt);
    newLi.style.backgroundColor='yellow';
    newLi.style.width='135px';
    loc.appendChild(newLi);
}

// • When updateFood button is clicked, new FoodItem should be placed as the first item
function addFoodItem(){
    var li = document.createElement("li");
    var lit = document.createTextNode("Sambar 👌");
    li.appendChild(lit);
    var list = document.getElementById("myList");
    list.insertBefore(li, list.children[0]);
}