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
    myValue2.style.left = px2 + 20 + 'px';
    myValue2.innerHTML = myRange2.value;

    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }
}

function clearInput(e) {
    var input = e.target.previousElementSibling
    input.value = ''
}