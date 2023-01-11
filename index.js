homePoint = 0;
guestPoint = 0;
let homePoints = document.querySelector("#home-points");
let guestPoints = document.querySelector("#guest-points");

function addHomeFreethrowPoints() {
    homePoint += 1
    homePoints.textContent = homePoint; 
}

function addHomeTwoPoints() {
    homePoint += 2
    homePoints.textContent = homePoint;
}

function addHomeThreePoints() {
    homePoint += 3
    homePoints.textContent = homePoint;
}

function addGuestFreethrowPoints() {
    guestPoint += 1
    guestPoints.textContent = guestPoint;
}

function addGuestTwoPoints() {
    guestPoint += 2
    guestPoints.textContent = guestPoint;
}

function addGuestThreePoints() {
    guestPoint += 3
    guestPoints.textContent = guestPoint;
}

function resetHomePoints() {
    homePoint = 0;
    homePoints.textContent = homePoint;
}

function resetGuestPoints() {
    guestPoint = 0;
    guestPoints.textContent = guestPoint;
}
