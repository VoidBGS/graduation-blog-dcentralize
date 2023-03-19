const scrollButtonElem = document.getElementById("fast-scroll");
const scrollLinkElem = document.getElementById("blog_scroll");
const blogElem = document.getElementById("blog");

const SCROLL_TRIGGER = 300;
const OPTIONS = {block:"start", behavior: "smooth"}

const smoothScroll = (event, element) => {
    event?.preventDefault();
    element?.scrollIntoView(OPTIONS);
}

const handleWindowScroll = (event) => {
    event.preventDefault();
    if (window.scrollY > SCROLL_TRIGGER)
        scrollButtonElem.style.right = "1em";
    else
        scrollButtonElem.style.right = "-20em";
}

scrollButtonElem.addEventListener('click', (event) => smoothScroll(event, document.body));
scrollLinkElem.addEventListener("click", (event) => smoothScroll(event, blogElem));
window.addEventListener("scroll", handleWindowScroll);
