let scrollButton = document.getElementById("fast-scroll");

const scrollToTop = (e) =>{
    e.preventDefault();
    window.scrollTo(0,0);
}

const handleWindowScroll = (e) =>{
    e.preventDefault();
    if (window.scrollY > 300)
        scrollButton.style.right = "1em";
    else 
        scrollButton.style.right = "-100em";
}

scrollButton.addEventListener('click', scrollToTop);
window.addEventListener("scroll", handleWindowScroll);