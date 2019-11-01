const fixedOpen = document.querySelector('.fixed-menu');
const fixedDisplay = document.querySelector('.fixed-display');
const fixedClose = document.querySelector('.close-btn');
console.log(fixedClose);

fixedOpen.addEventListener('click', function(e){
    fixedDisplay.style.display = "grid";
});

fixedClose.addEventListener('click', function(e){
    fixedDisplay.style.display = "none";
});