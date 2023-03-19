const root = document.querySelector(':root');
const funBtn = document.getElementById("fn-button");
const STORAGE_NAME = "font-color";

function changeColor(root) {
    const randColors = ["pink", "violet", "white", "red", "fuchsia", "cyan", "orange", "#4ed842"];
    const randNumber = Math.floor(Math.random() * 7);
    const currentColor = root.style.getPropertyValue('--primary');
    const randomColor = randColors.filter(color => color !== currentColor)[randNumber];
    addColorInStorage(randomColor);
    root.style.setProperty('--primary', randomColor);
}

function addColorInStorage(color) {
    localStorage.setItem(STORAGE_NAME, color);
}

function loadColorFromStorage(event) {
    event.preventDefault();
    const loadedColor = localStorage.getItem(STORAGE_NAME);
    root.style.setProperty('--primary', loadedColor);
}

funBtn.addEventListener('click', () => changeColor(root));
document.addEventListener("DOMContentLoaded", loadColorFromStorage);