// Functions for range input
function getVals() {
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);

    let myRange = slides[0];
    let myValue = document.querySelector('.first-range');
    let off = myRange.clientWidth / (parseInt(myRange.max) - parseInt(myRange.min));
    let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.clientWidth / 2);
    myValue.style.left = px + 20 + 'px';
    myValue.innerHTML = myRange.value;

    let myRange2 = slides[1];
    let myValue2 = document.querySelector('.second-range');
    let off2 = myRange2.clientWidth / (parseInt(myRange2.max) - parseInt(myRange2.min));
    let px2 = ((myRange2.valueAsNumber - parseInt(myRange2.min)) * off2) - (myValue2.clientWidth / 2);
    myValue2.style.left = px2 + 22 + 'px';
    myValue2.innerHTML = myRange2.value;

    if (slide1 > slide2) {
        let tmp = slide2; 
        slide2 = slide1; 
        slide1 = tmp;
    }
    if (Math.abs(slide1 - slide2) <= 4)
        myValue.style.top = '-25px'
    else
        myValue.style.top = '15px'
}

const rangeSlider = () => {
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                sliders[y].oninput();
            }
        }
    }
}

const clearInput = (e) => {
    let input = e.target.previousElementSibling;
    input.value = '';
}
