const numbers = ["1️⃣","1️⃣","2️⃣","2️⃣","3️⃣","3️⃣","4️⃣","4️⃣","5️⃣","5️⃣","6️⃣","6️⃣","7️⃣","7️⃣","8️⃣","8️⃣"];
function generate_board(){
    var shuf_number = numbers.sort(() => (Math.random() > .5)?2:-1);
    for(var i=0; i<numbers.length; i++){
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = shuf_number[i];
        document.querySelector('.game').appendChild(box);
    }
}