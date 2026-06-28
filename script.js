// ---------- Pages ----------

const pages = document.querySelectorAll(".page");

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}



// ---------- Elements ----------

const startBtn=document.getElementById("startBtn");

const nicknameBtn=document.getElementById("nicknameBtn");

const yesBtn=document.getElementById("yesBtn");

const noBtn=document.getElementById("noBtn");

const nextBtn=document.getElementById("nextBtn");

const finishBtn=document.getElementById("finishBtn");

const popup=document.getElementById("popup");

const closePopup=document.getElementById("closePopup");

const correctAnswer=document.getElementById("correctAnswer");

const letterBox=document.getElementById("letterBox");



// ---------- Landing ----------

startBtn.onclick=()=>{

    showPage("page2");

};



// ---------- Nickname Question ----------

nicknameBtn.onclick=()=>{

    if(correctAnswer.checked){

        showPage("page3");

    }

    else{

        popup.style.display="flex";

    }

};

closePopup.onclick=()=>{

    popup.style.display="none";

};



// ---------- Moving No Button ----------

let clickCount=0;

noBtn.addEventListener("mouseenter",()=>{

    let x=Math.random()*250-125;

    let y=Math.random()*160-80;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

});

noBtn.addEventListener("click",()=>{

    clickCount++;

    if(clickCount>=3){

        alert("🥺 Itni bhi kya narazgi hai babu...");

    }

});



// ---------- Yes Button ----------

yesBtn.onclick=()=>{

    showPage("page4");

    startTyping();

};



// ---------- Letter ----------

const message=`My baby,

I am extremely sorry my love.

Ahan baccha chi humar.

Please maaf k di ye beta hmar.

Bewkuf hai prr hai toh aapke hi bauwa.

Naadaan hai thode jada...

Par hai toh aapke hi babu n ❤️

Hmar praan...

Sorry beta ❤️`;

let index=0;

function startTyping(){

    letterBox.innerHTML="";

    nextBtn.style.display="none";

    index=0;

    typeLetter();

}

function typeLetter(){

    if(index<message.length){

        letterBox.innerHTML+=message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

    else{

        nextBtn.style.display="inline-block";

    }

}
// ---------- Next Button ----------

nextBtn.onclick = () => {

    showPage("page5");

};


// ---------- Finish Button ----------

finishBtn.onclick = () => {

    showPage("page6");

    launchConfetti();

};



// ---------- Floating Hearts ----------

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.opacity = Math.random();

    heart.style.transition = "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform = "translateY(-120vh)";

        heart.style.opacity = "0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6200);

}

setInterval(createHeart,600);



// ---------- Confetti ----------

function launchConfetti(){

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.style.position="fixed";

        piece.style.width="8px";

        piece.style.height="12px";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=

        `hsl(${Math.random()*360},90%,60%)`;

        piece.style.pointerEvents="none";

        piece.style.transition="transform 4s linear";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.style.transform=

            `translateY(${window.innerHeight+80}px)
             rotate(${Math.random()*720}deg)`;

        },50);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}



// ---------- Small Welcome Message ----------

window.onload=()=>{

    setTimeout(()=>{

        console.log("Website Loaded ❤️");

    },300);

};
