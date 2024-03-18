const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣","1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generate_board() {
    const shuffledEmojis = shuffle(emojis);
    for (let i = 0; i < shuffledEmojis.length; i++) {
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = shuffledEmojis[i];
        box.onclick = function () {
            this.classList.add('boxOpen');
            setTimeout(function () {
                if (document.querySelectorAll('.boxOpen').length > 1) {
                    if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                        
                        if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                            alert('Win');
                        } 
                    } else {
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                         document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    }
                }
            }, 300);
        };
        document.querySelector('.game').appendChild(box);
    }
}