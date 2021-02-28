const nav = document.querySelector('#main-nav');
const navTop = nav.offsetTop;
const width = window.matchMedia("(max-width: 850px)")

function stickyNavigation() { 
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
}

function addStick() {
    if (window.scrollY > (navTop) || width.matches) {
        console.log("addStick working")
        nav.classList.add("sticky")
    }
    else {
        console.log("addStick not working")
        nav.classList.remove("sticky")
    }
}

addStick();        
window.addEventListener('scroll', addStick);
window.addEventListener('resize', addStick);

        /*window.addEventListener('scroll', stickyNavigation);

        const rightNav = document.querySelector(".right-nav")
        const openMenu = document.querySelector(".menu-btn")

        openMenu.addEventListener('click', showRightNav)
        

        function showRightNav() {
            rightNav.style.display = "block"
            console.log("show")
            openMenu.addEventListener('click', function(){
                rightNav.style.display = "none"
                console.log("close")
            })
        }

        function closeRightNav() {

        }*/
document.querySelector('.menu-btn').addEventListener ('click', function(){
    document.querySelector('.nav-links').classList.toggle('show')
    document.querySelector('.right-nav').classList.toggle('show')
    console.log("menu-btn reg")
});

const el = document.querySelectorAll('.nav-btn')

for(var i=0; i < el.length; i++){
    el[i].addEventListener('click', function () {
        document.querySelector('.nav-links').classList.toggle('show')
        document.querySelector('.right-nav').classList.toggle('show')
        console.log("nav-btn reg")
    }, false);
}