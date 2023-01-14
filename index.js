homePoint = 0;
guestPoint = 0;
let homePoints = document.querySelector("#home-points");
let guestPoints = document.querySelector("#guest-points");

function additionFunction(sum, points) {
  if (points === homePoints) {
    homePoint += sum;
    points.textContent = homePoint;
  } else {
    guestPoint += sum;
    points.textContent = guestPoint;
  }
}

function resetBtn(PointsDisplay) {
  if (PointsDisplay === homePoints) {
    homePoint = 0;
    homePoints.textContent = homePoint;
  }else{
    guestPoint = 0;
    guestPoints.textContent = guestPoint;
  }
}
