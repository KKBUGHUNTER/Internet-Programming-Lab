function add_P_Tag() {
    var p = document.createElement('p');
    var p_data = document.createTextNode("This is the newly created p tag.");
    p.appendChild(p_data);
    
    document.body.appendChild(p);
}

function add_Item() {
    var new_li = document.createElement('li');
    var new_li_txt = document.createTextNode("two");
    new_li.appendChild(new_li_txt);
    var current = document.getElementById('i2');
    current.parentNode.insertBefore(new_li, current);
}

function remove_Item() {
    var node = document.getElementById('i1');
    node.parentNode.removeChild(node);
}

function replace_Item() {
    var New = document.createElement('li');
    var New_txt = document.createTextNode("THREE");
    New.appendChild(New_txt);

    var loc = document.getElementById('i2');
    loc.parentNode.replaceChild(New,loc);
}

function swap_Item(ele) {
    var next = ele.nextSibling;
    ele.parentNode.insertBefore(next,ele)
    
}


function selected(ele) {
    var e = document.getElementById(ele);
    e.style.backgroundColor = "blue";
}
function selectOut(ele) {
    var e = document.getElementById(ele);
    e.style.backgroundColor = "";
}

function selected1(e) {
    e.style.backgroundColor = "red";
}
function selectOut1(e) {
    e.style.backgroundColor = "";
}

function happyMouse(e) {
    var div = document.createElement('div');
    div.className = 'happymouse';
    Object.assign(div.style, { top: e.clientY + 'px', left: e.clientX + 'px' });
    document.body.appendChild(div);
    setTimeout(function () {
        document.body.removeChild(div); 
    }, 100);
}

document.addEventListener('mousemove', happyMouse); 

