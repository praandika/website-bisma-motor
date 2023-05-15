// When the user scrolls down 50px from the top of the document, change the header's color
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navigation").setAttribute("class", "header-scroll");
    } else {
        document.getElementById("navigation").removeAttribute("class");
    }
}