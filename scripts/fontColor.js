let root = document.querySelector(':root');
let funBtn = document.getElementById("fn-button");

function changeColor(root) {
    let randColors = ["pink", "violet", "white", "red", "fuchsia", "cyan", "orange", "#4ed842"];
    let randNumber = Math.floor(Math.random() * 7);
    let currentColor = root.style.getPropertyValue('--primary');
    root.style.setProperty('--primary', randColors.filter(color => color !== currentColor)[randNumber]);
}

funBtn.addEventListener('click', () => changeColor(root));