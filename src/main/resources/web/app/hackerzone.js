const Cookies = require('js-cookie')
const cookieName = "hackerzone-score";

class Score {
    /** @type number */
    points = 0;
    /** @type number */
    highscore = 0;
    /** @type number */
    prestige = 0;
    /** @type number */
    level = 1;
    /** @type string */
    name;
}

/** @returns Score */
function getScore() {
    let value = Cookies.get(cookieName)
    if (value === undefined) {
        let score = new Score();
        score.name = prompt("Who are you?");
        return score;
    } else {
        return JSON.parse(value);
    }
}

/** @param {Score} score */
function saveScore(score) {
    score.highscore = Math.max(score.highscore, score.points);
    Cookies.set(cookieName, JSON.stringify(score));
}

function newPosition(node) {
    node.style.left = Math.random() * (window.innerWidth - node.clientWidth) + "px";
    node.style.top = Math.random() * (window.innerHeight - node.clientHeight) + "px";
}


export class Hackerzone {
    start() {
        let score = getScore();
        const image = document.getElementById("hackerzone-card")

        let oldConfig = {
            style: {
                zIndex:  image.style.zIndex,
                position: image.style.position,
                width: image.style.width,
                height: image.style.height
            }
        };
        image.style.zIndex = 1000;
        image.style.position = "fixed";
        image.style.width = "15rem"
        image.style.height = "auto"

        alert("Fang den Bösewicht, er ist ausgebrochen!")
        newPosition(image);
        image.onclick = function () {
            newPosition(image);
            score.points++;
        }
        setTimeout(() => {
            saveScore(score)
            alert("Dein Score: " + score.points + ", Highscore: " + score.highscore)
            image.style.zIndex = oldConfig.style.zIndex  ;
            image.style.position = oldConfig.style.position ;
            image.style.width = oldConfig.style.width;
            image.style.height = oldConfig.style.height ;
        }, 10_000)
    }

    reset() {
        const score = getScore();
        score.highscore = Math.max(score.highscore, score.points);
        score.prestige++;
        score.level = 1;
        score.points = 0;
        saveScore(score);
    }
}