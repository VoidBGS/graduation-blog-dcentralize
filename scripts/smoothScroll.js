const scrollButton = document.getElementById("fast-scroll");
const scrollLink = document.getElementById("blog_scroll");
const blog = document.getElementById("blog");
const SCROLL_TRIGGER = 300;
const OPTIONS = {block:"start", behavior: "smooth"}

const smoothScroll = (event, element) => {
    event?.preventDefault();
    element?.scrollIntoView(OPTIONS);
}

const handleWindowScroll = (event) => {
    event.preventDefault();
    if (window.scrollY > SCROLL_TRIGGER)
        scrollButton.style.right = "1em";
    else
        scrollButton.style.right = "-20em";
}

scrollButton.addEventListener('click', (event) => smoothScroll(event, document.body));
scrollLink.addEventListener("click", (event) => smoothScroll(event, blog));
window.addEventListener("scroll", handleWindowScroll);
