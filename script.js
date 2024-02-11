let yes = document.getElementById("yes");
let no = document.getElementById("no");
let img = document.getElementById("img1");
let quest = document.getElementById("quest");
let heart = document.getElementById("heart");

no.addEventListener("click", (e) => {
    img.src = "img/img2.png";
    e.target.style.position = "absolute";
    e.target.left = 0;
    e.target.top = 0;
    avoid(e.target);
    quest.innerHTML = "Я не поняв. Кнопка 'Нет' была просто для вида -_-"
    e.target.addEventListener('mouseenter', () => { 
        avoid(e.target) 
    });
});

yes.addEventListener("click", (e) => {
    img.src = "img/fat-cat-dancing-cat.gif";
    e.target.parentNode.removeChild(no);
    e.target.parentNode.removeChild(yes);
    quest.innerHTML = "ЕЕЕЕЕ БОИИИИ. Теперь мы вместе навсегда, хы! А теперь подарочек"
    heart.style.display = "block";
    setInterval(heartBeatUp, 500);
})


function avoid(btn) {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
}

function random (min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

function heartBeatUp() {
    heart.style.width = "350px";
    heart.style.height = "350px";
    heart.style.left = "1075px";  
    heart.style.top = "95px"; 
    setTimeout(heartBeatDown, 250);
}
function heartBeatDown() {
    heart.style.width = "300px";
    heart.style.height = "300px";
    heart.style.left = "1100px";  
    heart.style.top = "120px"; 
}
