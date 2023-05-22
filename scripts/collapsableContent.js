const collapsableBtns = document.getElementsByClassName("collapsable");

const addEventsToBtns = (btns) => {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", addFunctionToBtn);
    }
}

const addFunctionToBtn = (e) => {
    e.preventDefault();
    const contentElem = e?.target?.nextElementSibling;
    e?.target?.classList.toggle("active");

    if (contentElem === undefined || contentElem === null)
        return;
    

    if (contentElem.style.maxHeight)
        contentElem.style.maxHeight = null;

    else
        contentElem.style.maxHeight = contentElem.scrollHeight + "px";
}

addEventsToBtns(collapsableBtns);