const fixedOpen = document.querySelector('.fixed-menu');
const fixedDisplay = document.querySelector('.fixed-display');
const fixedClose = document.querySelector('.close-btn');

fixedOpen.addEventListener('click', function(e){
    fixedDisplay.style.right = 0;
    fixedOpen.style.opacity = 0;
});

fixedClose.addEventListener('click', function(e){
    fixedDisplay.style.right = "-100%";
    fixedOpen.style.opacity = 1;
});