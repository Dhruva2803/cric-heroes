let livescore=document.getElementById("livescore-header");
let network=document.getElementById("network-header");
let addon=document.getElementById("addon-header");
let more=document.getElementById("more-header");

let golive=document.getElementById("golive");
let golivemenu=document.getElementById("go-livemenu");

let livemenu=document.getElementById("livescores");
let networkmenu=document.getElementById("network");
let addonmenu=document.getElementById("addon")
let moremenu=document.getElementById("more");


// console.log(livescore);

livescore.addEventListener("mouseover",()=>{
    livemenu.style.display="block";
});

livemenu.addEventListener("mouseleave",()=>{
    livemenu.style.display="none";
});
 
network.addEventListener("mouseover",()=>{
    networkmenu.style.display="block";
});
networkmenu.addEventListener("mouseleave",()=>{
    networkmenu.style.display="none";
});
addon.addEventListener("mouseover",()=>{
    addonmenu.style.display="block";
});
addonmenu.addEventListener("mouseleave",()=>{
    addonmenu.style.display="none";
});

golive.addEventListener("mouseover",()=>{
    golivemenu.style.display="block";
});

golivemenu.addEventListener("mouseleave",()=>{
    golivemenu.style.display="none";
});
more.addEventListener("mouseover",()=>{
    moremenu.style.display="block";
});
moremenu.addEventListener("mouseleave",()=>{
    moremenu.style.display="none";
});




// Mobile menu toggle
            const mobileMenuButton = document.querySelector('.left-hidden button');
            const mobileNav = document.querySelector('.mobile-nav');

            mobileMenuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileNav.contains(e.target) && e.target !== mobileMenuButton && !mobileMenuButton.contains(e.target)) {
                    mobileNav.classList.remove('active');
                }
            });