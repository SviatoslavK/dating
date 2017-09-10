//  Fetch data from url
// let personsData;
// let fetched = fetch('https://raw.githubusercontent.com/SviatoslavK/dating/master/users.json')
//     .then(response => response.json())
//     .then(json => {
//         personsData = json.personsData;
//     })


let personsData = [
    {
        name: 'Кристиночка',
        sex: 'female',
        online: true,
        photos: 12,
        age: 28,
        top: true,
        registrationDate: '2017-09-03',
        city: 'Санкт-Петербург',
        country: 'Россия',
        img: 'img/lg-photo_1.png',
        retinaImg: 'img/lg-photo_1@2x.png'
    },
    {
        name: 'Диана',
        sex: 'female',
        online: true,
        photos: 3,
        age: 20,
        top: true,
        registrationDate: '2017-09-07',
        city: 'Самара',
        country: 'Россия',
        img: 'img/lg-photo_2.png',
        retinaImg: 'img/lg-photo_2@2x.png'
    },
    {
        name: 'Аня',
        sex: 'female',
        online: true,
        photos: 125,
        age: 18,
        top: true,
        registrationDate: '2017-09-02',
        city: 'Ростов-на-Дону',
        country: 'Россия',
        img: 'img/lg-photo_3.png',
        retinaImg: 'img/lg-photo_3@2x.png'
    },
    {
        name: 'Анжелика',
        sex: 'female',
        online: false,
        photos: 17,
        age: 27,
        top: false,
        registrationDate: '2015-03-04',
        city: ' Чебоксары',
        country: 'Россия',
        img: 'img/lg-photo_4.png',
        retinaImg: 'img/lg-photo_4@2x.png'
    },
    {
        name: 'Лариса',
        sex: 'female',
        online: true,
        photos: 12,
        age: 32,
        top: false,
        registrationDate: '2015-03-05',
        city: 'Москва',
        country: 'Россия',
        img: 'img/lg-photo_5.png',
        retinaImg: 'img/lg-photo_5@2x.png'
    },
    {
        name: 'Настя',
        sex: 'female',
        online: true,
        photos: 3,
        age: 21,
        top: false,
        registrationDate: '2015-03-06',
        city: 'Зеленоград',
        country: 'Россия',
        img: 'img/lg-photo_6.png',
        retinaImg: 'img/lg-photo_6@2x.png'
    },
    {
        name: 'Евгения',
        sex: 'female',
        online: false,
        photos: 4,
        age: 30,
        top: false,
        registrationDate: '2015-03-07',
        city: 'Ростов-на-Дону',
        country: 'Россия',
        img: 'img/lg-photo_7.png',
        retinaImg: 'img/lg-photo_7@2x.png'
    },
    {
        name: 'Ольга',
        sex: 'female',
        online: true,
        photos: 28,
        age: 25,
        top: false,
        registrationDate: '2015-03-08',
        city: 'Казань',
        country: 'Россия',
        img: 'img/lg-photo_8.png',
        retinaImg: 'img/lg-photo_8@2x.png'
    },
    {
        name: 'Кристиночка',
        sex: 'female',
        online: false,
        photos: 12,
        age: 28,
        top: false,
        registrationDate: '2015-03-09',
        city: 'Санкт-Петербург',
        country: 'Россия',
        img: 'img/lg-photo_2.png',
        retinaImg: 'img/lg-photo_2@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_7.png',
        retinaImg: 'img/lg-photo_7@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_3.png',
        retinaImg: 'img/lg-photo_3@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_7.png',
        retinaImg: 'img/lg-photo_7@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_5.png',
        retinaImg: 'img/lg-photo_5@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_7.png',
        retinaImg: 'img/lg-photo_7@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_1.png',
        retinaImg: 'img/lg-photo_1@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_7.png',
        retinaImg: 'img/lg-photo_7@2x.png'
    },
    {
        name: 'Ангелина',
        sex: 'female',
        online: false,
        photos: 20,
        age: 20,
        top: true,
        registrationDate: '2015-03-09',
        city: 'Воронеж',
        country: 'Россия',
        img: 'img/lg-photo_4.png',
        retinaImg: 'img/lg-photo_4@2x.png'
    },

];