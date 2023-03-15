const scrollButton = document.getElementById("fast-scroll");
const SCROLL_TRIGGER = 300;

const scrollToTop = (e) => {
    e?.preventDefault();
    if(window.scrollY < 1)
        return;
    window.scrollTo(0, Math.floor(window.scrollY) * 0.95);
    setTimeout(scrollToTop, 10);
}

const handleWindowScroll = (e) => {
    e.preventDefault();
    if (window.scrollY > SCROLL_TRIGGER)
        scrollButton.style.right = "1em";
    else
        scrollButton.style.right = "-20em";
}

scrollButton.addEventListener('click', scrollToTop);
window.addEventListener("scroll", handleWindowScroll);