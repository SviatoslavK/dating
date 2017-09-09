// Functions for range input
function getVals() {
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);

    var myRange = slides[0];
    var myValue = document.querySelector('.first-range');
    var off = myRange.clientWidth / (parseInt(myRange.max) - parseInt(myRange.min));
    var px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.clientWidth / 2);
    myValue.style.left = px + 20 + 'px';
    myValue.innerHTML = myRange.value;

    var myRange2 = slides[1];
    var myValue2 = document.querySelector('.second-range');
    var off2 = myRange2.clientWidth / (parseInt(myRange2.max) - parseInt(myRange2.min));
    var px2 = ((myRange2.valueAsNumber - parseInt(myRange2.min)) * off2) - (myValue2.clientWidth / 2);
    myValue2.style.left = px2 + 22 + 'px';
    myValue2.innerHTML = myRange2.value;

    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    if(Math.abs(slide1 - slide2) <= 4)  
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
