function generatePhoto() {
    randomNumber1 = randomNumberGenerator();
    randomNumber2 = randomNumberGenerator();
    $(".dice").fadeIn(50).fadeOut(50).fadeIn(50);
    var dice1 = document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    var dice2 = document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + randomNumber2 + ".png");
}

function randomNumberGenerator() {
    var random = Math.floor(Math.random() * 6 + 1);
        return random;
}

function whoWins(r1, r2) {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player one wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player two wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "DRAW!";
    }
}

document.querySelector("button").addEventListener("click", function () {
    generatePhoto();
    whoWins(randomNumber1, randomNumber2);
    $("h1").animate({ "margin-left": '-253%' }, 'fast').animate({ opacity: 1, "margin-left": '+30' }, 'fast')
});


