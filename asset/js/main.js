// When the user scrolls down 50px from the top of the document, change the header's color
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navigation").style.backgroundColor = "#ffffff";
        for (let i = 0; i < document.getElementsByClassName("menulist").length; i++) {
            document.getElementsByClassName("menulist")[i].style.color = "#19A7CE";
        }
    } else {
        document.getElementById("navigation").style.backgroundColor = "transparent";
        for (let i = 0; i < document.getElementsByClassName("menulist").length; i++) {
            document.getElementsByClassName("menulist")[i].style.color = "#ffffff";
        }
    }
}