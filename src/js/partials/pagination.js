const customPaginate = items => {
    let paginateContainer = document.querySelector('.gallery__block');
    let itemsToPaginate = paginateContainer.querySelectorAll('.gallery__card');
    let pageNumber = Math.ceil((itemsToPaginate.length) / items);
    let pageNumbersContainer = document.querySelector('.pagination__pages');
    pageNumbersContainer.innerHTML = ''

    for (let i = 0; i < pageNumber; i++) {
        let page = document.createElement('div');
        page.classList.add('pagination__page');
        page.innerHTML = i + 1;
        pageNumbersContainer.appendChild(page);
    }

    togglePaginateItems(itemsToPaginate, items, 1)

    let paginationPages = Array.from(pageNumbersContainer.querySelectorAll('.pagination__page'))
    let activePage = paginationPages.filter(page => page.className.includes('active__page'));
    if (activePage.length === 0) {
        paginationPages[0].classList.add('active__page')
    }
    paginationPages
        .map(item => {
            item.addEventListener('click', () => {
                let number = parseInt(item.textContent, 10);
                item.classList.add('active__page');
                paginationPages
                    .filter(page => page !== item)
                    .map(page => page.classList.remove('active__page'))

                togglePaginateItems(itemsToPaginate, items, number)
            })
        })
}

const togglePaginateItems = (collection, items, pageNumber) => {
    Array.from(collection)
        .map((item, index) => {
            if ((index + 1) > ((pageNumber - 1) * items) && (index) < (pageNumber * items)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
}

const changePage = (direction) => {
    let paginationPages = Array.from(document.querySelectorAll('.pagination__page'))
    let activePage = paginationPages.filter(page => page.className.includes('active__page'))
    let collection = document.querySelectorAll('.gallery__card');
    let maxPages = Math.ceil((collection.length) / 8);
    let currentPage = parseInt(activePage[0].textContent, 10);
    if (direction === 'next') {
        if (currentPage < maxPages) {
            activePage[0].classList.remove('active__page');
            activePage[0].nextElementSibling.classList.add('active__page')
            togglePaginateItems(collection, 8, (currentPage + 1))
        }
    } else if (direction === 'prev') {
        if (currentPage > 1) {
            activePage[0].classList.remove('active__page');
            activePage[0].previousElementSibling.classList.add('active__page')
            togglePaginateItems(collection, 8, (currentPage - 1))
        }
    }
}