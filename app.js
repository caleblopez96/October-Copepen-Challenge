// selectors
const pumpkin = document.querySelector(".pumpkin");

const zombie = document.querySelector(".zombie");

const ghost = document.querySelector(".ghost");

const vampire = document.querySelector(".vampire");

const results = document.querySelector(".results-text");

const btn = document.querySelector('button');

const allElements = [pumpkin, zombie, ghost, vampire];

// function if trick
const trick = (element) => {
    element.innerText = "💩";
    element.style.fontSize = "4em";
    results.innerText = "You found the trick💩! Try again!";
};

// function if treat
const treat = (element) => {
    element.innerText = "🍬";
    element.style.fontSize = "4em";
    results.innerText = "You found the treat🍬! Happy Halloween!";
};


function handleClick(event, element) {
    event.preventDefault();
    chosen === element ? treat(element) : trick(element);
}

pumpkin.addEventListener("click", (event) => handleClick(event, pumpkin));
zombie.addEventListener("click", (event) => handleClick(event, zombie));
ghost.addEventListener("click", (event) => handleClick(event, ghost));
vampire.addEventListener("click", (event) => handleClick(event, vampire));

// randomly selects an element (ghoul)
const chosen = allElements[Math.floor(Math.random() * allElements.length)];

/* the play again button refreshes the page, so its not going to work on codepen. */
btn.addEventListener('click', ()=>{
    window.location.reload()
}) 
