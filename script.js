const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
    return keys[getRandomNumber(0, keys.lenght-1)]
}

function targetRandomKey() {
    const key = document.getElementById(getRandomKey());
    key.classList.add("selected");
    let start = Data.now()
}

function getTimestamp() {
    return Math.floor(Date.now() / 1000)
}

