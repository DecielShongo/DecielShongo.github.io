let nav = document.querySelector("nav");
let prevScrollPos = window.scrollY;
let skills = document.getElementById('skills');
let aboutMe = document.getElementById('about-me');
let contact = document.querySelector('footer');
let firstImage = document.getElementById('image-deciel');

setInterval(getScroll, 1000);
setInterval(()=>{firstImage.className = firstImage.className === "up"? "down" : "up";}, 1500);


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

let swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 60,
    centeredSlides: true,
    // If we need pagination
/*     pagination: {
        el: '.swiper-pagination',
    }, */

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },

    // And if we need scrollbar
/*     scrollbar: {
        el: '.swiper-scrollbar',
    }, */
});

/* swiper.on('slideChange', function () {
    swiper.slides[swiper.activeIndex].style.transform = "scale(1.05)";
    swiper.slides[swiper.activeIndex + 1].style.transform = "scale(1)";
    swiper.slides[swiper.activeIndex - 1].style.transform = "scale(1)";

}); */

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
    if(e.screenY < 120)
    {
        nav.style.top = "0px";
    }
}

function float(element) 
{
/*     let oldTop = parseInt(element.style.top.replace(/px/,""));
    console.log("hello " + parseInt(element.style.top));
    let newTop = oldTop + 60;
    console.log(newTop);

    element.style.top = newTop + "px";
    element.style.marginBottom = "100px";

    setInterval(() => {  element.style.top = oldTop;
                        element.style.marginBottom = "-100px";
                    }, 500); */

    element.className = element.className === "up"? "down" : "up";
    console.log(element.className);
}
