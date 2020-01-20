var gameGrid = document.getElementById("gameGrid");
var tiles = Array.from(document.getElementsByClassName("tiles"));
var icons = Array.from(document.getElementsByClassName("fa"));
var padding = 15;
var attempt = [];
var matched = 0;

// responsive layout
window.onload = function() {
    resizeGame();
    shuffleTiles();
};
window.onresize = function() { resizeGame() };

function resizeGame() {
    var portrait = window.innerHeight - gameGrid.offsetTop - padding > window.innerWidth - padding * 2;
    var threshold = window.innerWidth - padding * 2 > 400 && window.innerHeight - gameGrid.offsetTop - padding > 400;

    if (threshold) {
        if (portrait) {
            gameGrid.style.width = window.innerWidth - padding * 2 + "px";
            gameGrid.style.height = gameGrid.style.width;
        }
        else {
            gameGrid.style.height = window.innerHeight - gameGrid.offsetTop - padding + "px";
            gameGrid.style.width = gameGrid.style.height;
        }
    }
    icons.forEach((icon, i) => {
        icon.style.fontSize = tiles[i].offsetHeight - 30 + "px";
    });
}

// shuffle logic
function shuffleTiles() {
    for (i=0; i<16; i++) {
        var randomNumber = Math.round(Math.random() * 15);
        var memory = icons[randomNumber].className;

        icons[randomNumber].className = icons[i].className;
        icons[i].className = memory;
    }
}

// flip logic
tiles.forEach(function(t, i) {
    t.onclick = function() {
        if (!t.style.animation.startsWith("flip")) {
            t.style.animation = "flip 0.2s";
            setTimeout(function() {
                icons[i].style.opacity = "1";

                attempt.push(tiles[i]);

                if (attempt.length == 2) {
                    matchIcons();
                }
            }, 100);
        }
    };
});

// match icons logic
function matchIcons() {
    if (attempt[0].innerHTML != attempt[1].innerHTML) {
        disableClicking();
    } else {
        attempt[0].style.background = "green";
        attempt[1].style.background = "green";
        attempt = [];
        matched += 2;
        if (matched == 16) {
            setTimeout(victory, 200);
        }
    }
}

function disableClicking() {
    tiles.forEach(function(t) { t.style.pointerEvents = "none" });
    setTimeout(unflip, 1000);
}

function unflip() {
    attempt.forEach(function(a) {
        a.style.animation = "unflip 0.2s";
        setTimeout(function() { a.firstChild.style.opacity = "0" }, 100);
        setTimeout(function() {
            attempt = [];
            tiles.forEach(function(t) { t.style.pointerEvents = "inherit" });
        }, 200);
    });
}

function victory() {
    alert("Well done! You have matched all the tiles! Press OK to play again.");
    resetGame();
}

function resetGame() {
    tiles.forEach(function(t) {
        t.style.animation = "unflip 0.1s";
        t.style.background = "red";
        t.firstChild.style.opacity = "0";
        matched = 0;
    });

    shuffleTiles();
}
