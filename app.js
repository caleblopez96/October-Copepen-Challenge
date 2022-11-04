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


// event handlers
// receiving the callback of trick() or treat() depending on 'chosen'
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

// randomly selects an element (ghoul)
const chosen = allElements[Math.floor(Math.random() * allElements.length)];

/* the play again button refreshes the page, so its not going to work on codepen. */
btn.addEventListener('click', ()=>{
    window.location.reload()
}) 