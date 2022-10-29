const pumpkin = document.querySelector(".pumpkin");

const zombie = document.querySelector(".zombie");

const ghost = document.querySelector(".ghost");

const vampire = document.querySelector(".vampire");

const winner = document.querySelector(".winning-text");

const btn = document.querySelector("button")


const trick = (element) => {
    event.preventDefault();
    element.innerText = "💩";
    element.style.fontSize = "4em";
    winner.innerText = "You found a trick💩! Try again!";
};

const treat = (element) => {
    event.preventDefault();
    element.innerText = "🍬";
    element.style.fontSize = "4em";
    winner.innerText = "You found the treat🍬! Happy Halloween!";
};

pumpkin.addEventListener("click", () => {
    trick(pumpkin);
});

zombie.addEventListener("click", () => {
    trick(zombie);
});

ghost.addEventListener("click", () => {
    treat(ghost);
});

vampire.addEventListener("click", () => {
    trick(vampire);
});

btn.addEventListener('click', ()=>{
    window.location.reload()
})
