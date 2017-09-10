const cardsHTML = data => {
    let fragment = document.createDocumentFragment();
    data
        .sort((a, b) => Date.parse(b.registrationDate) - Date.parse(a.registrationDate))
        .map(item => {
            let temlate = document.createElement('template');
            let retina = window.devicePixelRatio > 1;
            let rightImage = retina ? item.retinaImg : item.img;
            temlate.innerHTML = `
        <div class="gallery__card" ${item.online ? 'online' : ''}>
                <div class="gallery__card--img">
                <img src="${rightImage}" class="card__avatar">
                    <div class="gallery__card--photos">
                        <div class="card__photos--icon"></div>
                        <div class="card__photos--quanity">${item.photos}</div>
                    </div>
                    ${item.top ? '<div class="gallery__card--top">топ</div>' : ''}
                    <div class="gallery__card--buttons">
                        <div class="card__button--item card__button--favorite">
                            <div class="button__favorite--icon"></div>
                            <div class="button__favorite--text">Избранное</div>
                        </div>
                        <div class="card__button--item card__button--write">
                            <div class="button__write--icon"></div>
                            <div class="button__write--text">Написать</div>
                        </div>
                    </div>
                </div>
                <div class="gallery__card--title">
                    <div class="card__title--name">${item.name}, ${item.age} <span class="online"></span></div>
                    <div class="card__title--location">${item.city}, ${item.country}</div>
                </div>
            </div>
        `
            fragment.appendChild(temlate.content)
        })

    return fragment;
}

const appendCards = (data, perPage) => {
    let markup = cardsHTML(data)
    let galeryContiner = document.querySelector('.gallery__block');
    galeryContiner.innerHTML = ''
    galeryContiner.appendChild(markup)
    customPaginate(perPage)
}
const filterGirls = status => {
    if (status === 'new') {
        let week = 604800000;
        let lastWeek = Date.parse(new Date) - week
        let lastRegistrated = personsData.filter(item => Date.parse(item.registrationDate) > lastWeek)
        appendCards(lastRegistrated, 8)
    } else {
        appendCards(personsData.filter(item => item[status]), 8)
    }
}

const search = () => {
    let inputBlock = document.querySelector('.filter__block');
    let cityInput = inputBlock.querySelector('[name="city"]');
    let city = cityInput.value.toLowerCase()
    let ranges = [...inputBlock.querySelectorAll('[type="range"]')].sort((a, b) => a.value - b.value);
    let fromAge = ranges[0].value
    let tillAge = ranges[1].value

    let searchGirls = personsData.filter(item => {
        return item.age >= fromAge && item.age <= tillAge && item.city.toLowerCase().includes(city)
        // return item.age >= fromAge && item.age <= tillAge && item.city.toLowerCase() === city
    })
    appendCards(searchGirls, 8)

}
appendCards(personsData, 8)

// Change status at card
const setFavorite = () => {
    let allCards = Array.from(document.querySelectorAll('.gallery__card'));
    allCards.map(card => {
        let favoriteText = card.querySelector('.button__favorite--text');
        let favoriteBlock = card.querySelector('.card__button--favorite')
        if (card.hasAttribute('favorite')) {
            favoriteText.innerHTML = 'В избранных'
        } else {
            favoriteText.innerHTML = 'Избранное'
        }

        favoriteBlock.addEventListener('click', () => {
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