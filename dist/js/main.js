function changeImage() {
    var slide = document.getElementsByClassName('slider-inner')[0].children;
    var index = 0;
    for (var i = 0; i < slide.length; i++) {
        if (slide[i].className.indexOf("active") !== -1) {
            slide[i].className = "slide";
            index = i+1;
        }
    }
    if (index > 3) {
        index = 0;
    }
    slide[index].className = "slide active";
}

setInterval(changeImage, 2000);
