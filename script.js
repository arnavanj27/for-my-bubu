// Pages
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");

// Buttons
const startBtn = document.getElementById("startBtn");
const next1 = document.getElementById("next1");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Letter
const letter = document.getElementById("letter");

// Open surprise
startBtn.addEventListener("click", () => {

    page1.style.display = "none";
    page2.style.display = "block";

});

// Nickname validation
next1.addEventListener("click", () => {

    if(document.getElementById("correctAnswer").checked){

        page2.style.display = "none";
        page3.style.display = "block";

    }else{

        alert("😂 Ae bhakol, sahi option choose karo.");

    }

});

// Yes button
yesBtn.addEventListener("click", () => {

    page3.style.display = "none";
    page4.style.display = "block";

    typeLetter();

});

// No button
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});

// Typewriter Effect
const message = `Dear Bubu...

Thank you for being my safe place.

Thank you for tolerating my stupidity.

I'm really sorry if I've ever hurt you.

I promise to annoy you forever.

Because life without you would never feel complete.

I love you ❤️`;

let index = 0;

function typeLetter(){

    letter.innerHTML = "";

    index = 0;

    const interval = setInterval(() => {

        letter.innerHTML += message.charAt(index);

        index++;

        if(index >= message.length){

            clearInterval(interval);

            setTimeout(() => {

                page4.style.display = "none";
                page5.style.display = "block";

            },2500);

        }

    },40);

}
