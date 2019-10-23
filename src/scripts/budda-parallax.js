const parallax = document.querySelector(".budda-parallax");
const layers = parallax.children;

function moveLayers(wScroll) {
    Array.from(layers).forEach(layer => {

        const divider = layer.dataset.speed;
        const strafe = wScroll * divider/20;

        layer.style.transform = `translateY(-${strafe}%)`;
    });

}

window.addEventListener("scroll", e=> {
    const wScroll = window.pageYOffset;

    const position = document.querySelector(".budda-section").offsetTop - 200;

    if (wScroll >= position) {
        moveLayers(wScroll);
    }
});