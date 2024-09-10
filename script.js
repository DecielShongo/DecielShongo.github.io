let nav = document.querySelector("nav");
let prevScrollPos = window.scrollY;
setInterval(getScroll, 1000);

window.onscroll = function()
{
    let currentScrollPos = window.scrollY;
    console.log("current: " + currentScrollPos);
    console.log("prev: " + prevScrollPos);
    if (currentScrollPos <= prevScrollPos)
    {
        nav.style.top = "0px";
    }
    else 
    {
        nav.style.top = "-100px";
    }
    
};

function getScroll() {
    prevScrollPos = window.scrollY;
}