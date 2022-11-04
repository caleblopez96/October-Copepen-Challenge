// selectors
const pumpkin = document.querySelector(".pumpkin");

const zombie = document.querySelector(".zombie");

const ghost = document.querySelector(".ghost");

const vampire = document.querySelector(".vampire");

const winner = document.querySelector(".results-text");

const btn = document.querySelector('button');

// function if trick
const trick = (element) => {
    element.innerText = "💩";
    element.style.fontSize = "4em";
    winner.innerText = "You found the trick💩! Try again!";
};

// function if treat
const treat = (element) => {
    element.innerText = "🍬";
    element.style.fontSize = "4em";
    winner.innerText = "You found the treat🍬! Happy Halloween!";
};

const allElements = [pumpkin, zombie, ghost, vampire];

// passing the callback functions to the click event
// to determine outcome

pumpkin.addEventListener("click", (event) => {
    event.preventDefault()
    chosen === pumpkin ? treat(pumpkin) : trick(pumpkin);
});

zombie.addEventListener("click", (event) => {
    event.preventDefault()
    chosen === zombie ? treat(zombie) : trick(zombie);
});

ghost.addEventListener("click", (event) => {
    event.preventDefault()
    chosen === ghost ? treat(ghost) : trick(ghost);
});

vampire.addEventListener("click", (event) => {
    event.preventDefault()
    chosen === vampire ? treat(vampire) : trick(vampire);
});

const chosen = allElements[Math.floor(Math.random() * allElements.length)];

/* the play again button refreshes the page, so its not going to work on codepen. */

btn.addEventListener('click', ()=>{
    window.location.reload()
}) 