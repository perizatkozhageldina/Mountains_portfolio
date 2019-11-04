const fixedOpen = document.querySelector('.fixed-menu');
const fixedDisplay = document.querySelector('.fixed-display');
const fixedClose = document.querySelector('.close-btn');
const menuList = document.querySelector('.nav__list');

fixedOpen.addEventListener('click', function(e){
    fixedDisplay.style.right = 0;
    fixedOpen.style.opacity = 0;
});

function closeMenu () {
    fixedDisplay.style.right = "-100%";
    fixedOpen.style.opacity = 1;
};

fixedClose.addEventListener('click', function(e){
    closeMenu();
});

menuList.addEventListener("click", function(e){
    target = e.target;
    if (target.classList.contains('nav__link')) {
        closeMenu();
    }
});