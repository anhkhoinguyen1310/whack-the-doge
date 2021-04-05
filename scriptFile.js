const holes = document.querySelectorAll('.hole');
const scoreNo = document.getElementById("score");
const moles = document.querySelectorAll('.mole'); 
const countdownBoard = document.getElementById("countdown");
const startButtons = document.getElementById("startButton"); 


let lastHole; 
let timeUp = false;   
let timeLimit = 20000;
let scores       = 0;
let countdown;
 // generate random number for  Hole
function pickRandom (holes)
{
    const randomHole = Math.floor(Math.random()*holes.length);
    const holeNo = holes[randomHole];
    if (holeNo === lastHole)
    {
        return pickRandom(holes); 
    }
    lastHole = holeNo; 
    return holeNo;
} 

function popOut()  
{
    const time = Math.random() * 1300 +400; // create times 
    const holeNo = pickRandom(holes); // different hole
    holeNo.classList.add('up'); // call css elemnt to go up from 100% to 0
    setTimeout(function(){
         holeNo.classList.remove('up'); // remove up class for doge to slide down  
         if (!timeUp) popOut(); 
     }, time );
}  



function startGame()
{
    countdown = timeLimit/1000; // dynamic in case wanna change later 
    scoreNo.textContent = 0; 
    scoreNo.style.display = 'block';
    document.getElementById("user-name-prompt").style.display = 'block'

    countdownBoard.textContent = countdown;
    timeUp = false; 
    scores = 0; 
    popOut();
    setTimeout(function() {
        timeUp = true;
    }, timeLimit);

    //.style.display = 'block'
    // every one sec run this function 
    let startCountdown = setInterval(function () {
        countdown -=1;
        countdownBoard.textContent = countdown; 
        if(countdown < 0)
        {
            countdown = 0;
             clearInterval(startCountdown);
             countdownBoard.textContent = 'Time Up, Dogecoin goes to the moonnn';
        }

    }, 1000);
}

startButtons.addEventListener("click", startGame);
function whack(e)
{
    scores++;
    this.style.backgroundImage = 'url("doge3.png")';
    this.style.pointerEvents = 'none';
    setTimeout( () => {
        this.style.backgroundImage= 'url("doge11.png")';
        this.style.pointerEvents = 'all';
    }, 800); 
    scoreNo.textContent = scores; 
}
 
moles.forEach(mole => mole.addEventListener('click', whack));  