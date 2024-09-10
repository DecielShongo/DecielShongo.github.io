let nav = document.querySelector("nav");
let prevScrollPos = window.scrollY;
var skills = document.getElementById('skills');
var aboutMe = document.getElementById('about-me');
var contact = document.querySelector('footer')
setInterval(getScroll, 1000);

window.onscroll = function()
{
    let currentScrollPos = window.scrollY;

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

function navigate(event) {
    if(event.target.innerText == "Skills")
    {
        skills.scrollIntoView({behavior: 'smooth'});
    }
    else if(event.target.innerText == "About Me")
    {
        aboutMe.scrollIntoView({behavior: 'smooth'});
    }
    else if(event.target.innerText == "Contact")
    {
        contact.scrollIntoView({behavior: 'smooth'});
    }
    else
    {
        window.scrollTo({top:0, behavior:'smooth'});
    }
}

onmousemove = (e) => 
{
    console.log("screenY: "+ e.screenY)

    if(e.screenY < 120)
    {
        nav.style.top = "0px";
    }
}

