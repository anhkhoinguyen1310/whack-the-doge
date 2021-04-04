const hole = document.querySelectorAll('.hole');
const score =  document.querySelectorAll('.score');
const mole = document.querySelectorAll('.mole'); 
const countdownBoard = document.querySelectorAl('.countdown');
const startButton= document.querySelectorAl('.startButton'); 

let lastHole; 
let timeUp = false;   
let timeLimit = 20000;
let score = 0;
let countdown;
 // generate random number for  Hole
function pickRandom (hole)
{
    const randomHole = Math.floor(Math.random()*hole.length);
    const holeNo = hole[randomHole];
    if (holeNo === lastHole)
    {
        return pickRandom(hole); 
    }
    lastHole = holeNo; 
    return holeNo;
} 

function popOut()  
{
    const time = Math.random * 1300 +400; // create times 
    const holeNo = pickRandom(hole); // different hole
    holeNo.classList.add('up'); // call css elemnt to go up from 100% to 0
    setTimeout(function(){
         holeNo.classList.remove('up'); // remove up class for doge to slide down  
         if (!timeUp) popOut(); 
    }, time );
}

popOut();