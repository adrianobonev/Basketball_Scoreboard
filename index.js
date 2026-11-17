const homeScore = document.getElementById("home-score") 
const guestScore = document.getElementById("guest-score")

//Im using const instead of let because i won't reuse the variable, so it's more appropiate to write const.

let homePoints = 0
let guestPoints = 0

function sumarOneH() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function sumarTwoH() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function sumarThreeH() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function sumarOneG() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function sumarTwoG() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function sumarThreeG() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

