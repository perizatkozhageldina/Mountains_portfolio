var element = document.querySelector('.about');
var btn = document.getElementById('scroll-down-btn');

btn.addEventListener('click', function(e) {
    element.scrollIntoView({block: "end", behavior: "smooth"});
});