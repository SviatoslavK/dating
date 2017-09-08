

var toTopBtn = document.querySelector('#btn__to-top');
toTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// Change status at card
function setFavorite() {
    var allCards = Array.from(document.querySelectorAll('.gallery__card'));
    allCards.map(function (card) {
        var favoriteText = card.querySelector('.button__favorite--text');
        var favoriteBlock = card.querySelector('.card__button--favorite')
        if (card.hasAttribute('favorite')) {
            favoriteText.innerHTML = 'В избранных'
        } else {
            favoriteText.innerHTML = 'Избранное'
        }

        favoriteBlock.addEventListener('click', function () {
            if (card.hasAttribute('favorite')) {
                card.removeAttribute('favorite')
                favoriteText.innerHTML = 'Избранное'
            } else {
                card.setAttribute('favorite', 'true')
                favoriteText.innerHTML = 'В избранных'
            }
        })
    })
}

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

window.onload = setFavorite()
window.onload = customPaginate(8)
window.onload = function () {
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                sliders[y].oninput();
            }
        }
    }
}

