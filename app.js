var totalScore = 0;

function runTurn() {
    var runs = Math.floor(Math.random() * 7);
    totalScore += runs;
    return runs;
}

function showResult() {
    var runs = runTurn();
    var box = document.querySelector('.box');
    var resultParagraph = document.getElementById("result");

    if (runs === 0) {
        box.style.backgroundColor = "red";
        resultParagraph.innerHTML = "Out! Total Score:" + totalScore;
        totalScore = 0;
    } else if (runs === 6) {
        box.style.backgroundColor = "green";
        resultParagraph.innerHTML = "You scored a six (" + runs + " runs) " + totalScore;
    } else {
        box.style.backgroundColor = "yellow";
        resultParagraph.innerHTML = " " + runs + " runs! Total Score: " + totalScore;
    }

    resultParagraph.style.fontSize = "30px";
}