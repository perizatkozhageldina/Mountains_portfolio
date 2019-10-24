const parallax = document.querySelector(".budda-parallax");
const layers = parallax.children;

function moveLayers(wScroll) {
    Array.from(layers).forEach(layer => {

        const divider = layer.dataset.speed;
        const strafe = wScroll * divider/20;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
}

function getOffsets(block) {
    var element = document.querySelector('.'+block),
    
    rect = element.getBoundingClientRect();
    return rect;
}

window.addEventListener("scroll", e=> {

    var bottomOffset = getOffsets('contacts').top;
    console.log(bottomOffset);

    if (bottomOffset < 0) {
        this.move(pf1, bottomOffset, 300);
        this.move(pf2, bottomOffset, 150);
        this.move(pf3, bottomOffset, 400);
        this.move(pf4, bottomOffset, 250);
        this.move(pf5, bottomOffset, 100);
    };

    moveLayers(wScroll);
});