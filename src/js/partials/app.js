

let toTopBtn = document.querySelector('#btn__to-top');
toTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

let allSection = Array.from(document.querySelectorAll('.choose__item'));
allSection.map(item => {
    item.addEventListener('click', () => {
        if (item.hasAttribute('checking')) {
            item.removeAttribute('checking');
            appendCards(personsData, 8)
        } else {
            item.setAttribute('checking', 'true');
            allSection
                .filter(el => el !== item)
                .map(el => el.removeAttribute('checking'))
        }
    })
})

window.onload = setFavorite();
window.onload = rangeSlider();

