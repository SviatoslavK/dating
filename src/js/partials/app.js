

var toTopBtn = document.querySelector('#btn__to-top');
toTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})




var allSection = Array.from(document.querySelectorAll('.choose__item'));
allSection.map(function (item) {
    item.addEventListener('click', function () {
        if (item.hasAttribute('checking')) {
            item.removeAttribute('checking')
        } else {
            item.setAttribute('checking', 'true');
            var rrr = allSection.filter(function(el) {
                return el !== item
            }).map(function(el) {
                el.removeAttribute('checking')
            })
        }
    })
})

window.onload = setFavorite();
window.onload = customPaginate(8);
window.onload = rangeSlider();

