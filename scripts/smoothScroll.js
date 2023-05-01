const scrollButtonElem = document.getElementById("fast-scroll");
const scrollLinkElem = document.getElementById("blog_scroll");
const blogElem = document.getElementById("blog");
const aDeepElem = document.getElementById("blog_deep");

const SCROLL_TRIGGER = 300;

const smoothScroll = (event, element, block) => {
    event.preventDefault();

    const OPTIONS = {block: block, behavior: "smooth"};
    element.scrollIntoView(OPTIONS);
}

const handleWindowScroll = (event) => {
    event.preventDefault();
    
    if (window.scrollY > SCROLL_TRIGGER)
        scrollButtonElem.style.right = "1em";
    else
        scrollButtonElem.style.right = "-20em";
}

scrollButtonElem.addEventListener("click", (event) => smoothScroll(event, document.body, "start"));
scrollLinkElem.addEventListener("click", (event) => smoothScroll(event, blogElem, "start"));
aDeepElem.addEventListener("click", (event) => smoothScroll(event, blogElem, "end"));
window.addEventListener("scroll", handleWindowScroll);
