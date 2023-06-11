const rootElem = document.querySelector(":root");
const funElem = document.getElementById("fn-button");

const STORAGE_NAME = "font-color";
const PRIMARY_ATTRIBUTE_NAME = "--primary";
const MIN = 1;

function addColorInStorage(color) {
    localStorage.setItem(STORAGE_NAME, color);
}

function changeColor(root) {
    const hackerGreen = "#4ed842";
    const randColors = ["pink", "violet", "white", "red", "fuchsia", "cyan", "orange", hackerGreen];
    const randNumber = Math.floor(Math.random(1) * (randColors.length - MIN));
    const currentColor = root.style.getPropertyValue(PRIMARY_ATTRIBUTE_NAME);
    const randomColor = randColors.filter(color => color !== currentColor)[randNumber];

    addColorInStorage(randomColor);
    root.style.setProperty(PRIMARY_ATTRIBUTE_NAME, randomColor);
}

function loadColorFromStorage(event) {
    event?.preventDefault();
    
    const loadedColor = localStorage.getItem(STORAGE_NAME);
    rootElem.style.setProperty(PRIMARY_ATTRIBUTE_NAME, loadedColor);
}

funElem.addEventListener("click", () => changeColor(rootElem));
document.addEventListener("DOMContentLoaded", loadColorFromStorage);
