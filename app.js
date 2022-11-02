// selectors
const pumpkin = document.querySelector(".pumpkin");

const zombie = document.querySelector(".zombie");

const ghost = document.querySelector(".ghost");

const vampire = document.querySelector(".vampire");

const winner = document.querySelector(".results-text");

const btn = document.querySelector('button');

// function if trick
const trick = (element) => {
    event.preventDefault();
    element.innerText = "💩";
    element.style.fontSize = "4em";
    winner.innerText = "You found the trick💩! Try again!";
};

// function if treat
const treat = (element) => {
    event.preventDefault();
    element.innerText = "🍬";
    element.style.fontSize = "4em";
    winner.innerText = "You found the treat🍬! Happy Halloween!";
};

// passing the callback functions to the click event
// to determine outcome

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

/* the play again button refreshes the page, so its not going to work on codepen.

btn.addEventListener('click', ()=>{
    window.location.reload()
}) 

*/
