const customPaginate = items => {
    let paginateContainer = document.querySelector('.gallery__block');
    let itemsToPaginate = paginateContainer.querySelectorAll('.gallery__card');
    let pageNumber = Math.ceil((itemsToPaginate.length) / items);
    let pageNumbersContainer = document.querySelector('.pagination__block');
    pageNumbersContainer.innerHTML = ''

    for (let i = 0; i < pageNumber; i++) {
        let page = document.createElement('div');
        page.classList.add('pagination__page');
        page.innerHTML = i + 1;
        pageNumbersContainer.appendChild(page);
    }

    Array.from(itemsToPaginate)
        .filter((item, index) => index > (items - 1))
        .map(item => item.style.display = 'none')

    let paginationPages = Array.from(pageNumbersContainer.querySelectorAll('.pagination__page'))
    paginationPages
        .map(item => {
            item.addEventListener('click', () => {
                let number = parseInt(item.textContent, 10);
                item.classList.add('active__page');
                paginationPages
                    .filter(page => page !== item)
                    .map(page => page.classList.remove('active__page'))

                Array.from(itemsToPaginate)
                    .map((item, index) => {
                        if ((index + 1) > ((number - 1) * items) && (index) < (number * items)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    })
            })
        })
}