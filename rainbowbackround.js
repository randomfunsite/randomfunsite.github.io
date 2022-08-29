var r = 255
var g = 255
var b = 255
var rand = 0

while (true) {
    setTimeout(setRandomBackroundColour(), 100)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function setRandomBackroundColour() {
    rand = getRandomInt(3)
    if (rand == 0) {
        if (r == 255) {
            r = 254
        }
        if (r == 0) {
            r = 1
        }
        rand = getRandomInt(2)
        if (rand == 0) {
            r -= 1
        }
        if (rand == 1) {
            r =+ 1
        }
    }
    if (rand == 1) {
        if (g == 255) {
            g = 254
        }
        if (g == 0) {
            g = 1
        }
        rand = getRandomInt(2)
        if (rand == 0) {
            g -= 1
        }
        if (rand == 1) {
            g =+ 1
        }
    }
    if (rand == 2) {
        if (b == 255) {
            b = 254
        }
        if (b == 0) {
            b = 1
        }
        rand = getRandomInt(2)
        if (rand == 0) {
            b -= 1
        }
        if (rand == 1) {
            b =+ 1
        }
    }
   body{background-color: 'rgb(' + r + ',' + g + ',' + b + ')';}
}