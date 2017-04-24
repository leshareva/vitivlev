var express = require('express');
var router = express.Router();

var weeks =  [
    { body: "Основы дизайна. Силуэт и детали" },
    { body: "Простые и сложные формы в силуэте" },
    { body: "Перспектива" },
    { body: "Геометрический примитив", sub: 'Бытовые объекты, военная техника, грузовики, архитектура, оружие' },
    { body: "Светотень" },
    { body: "Сечения", sub: "Самолеты, автомобили, вертолеты, лодки" },
    { body: "Светотень 2" },
    { body: "Органический примитив", sub: "Морские существа, растения" },
    { body: "Текстура", sub: "Деревья, пушистые животные" },
    { body: "Животные и существа" },
    { body: "Персонажи и люди" },
    { body: "Повторение и общий рабочий процесс" },
];

var shop = [
    {
        link: "https://gum.co/ntWED",
        thumb: "https://firebasestorage.googleapis.com/v0/b/vitivlev-eb599.appspot.com/o/shop%2F1.jpg?alt=media&token=c6b58645-731a-447f-8a94-2a7a53403c0d"
    },{
        link: "https://gum.co/LFFAj",
        thumb: "https://firebasestorage.googleapis.com/v0/b/vitivlev-eb599.appspot.com/o/shop%2F2.jpg?alt=media&token=eb6248a1-fdda-4a16-99b2-f744214f5547"
    },{
        link: "https://gum.co/ZFfom",
        thumb: "https://firebasestorage.googleapis.com/v0/b/vitivlev-eb599.appspot.com/o/shop%2F3.jpg?alt=media&token=2cb7d581-4ebe-44f9-b2a7-fef5fc7b0f6e"
    },{
        link: "https://gum.co/aAtQ",
        thumb: "https://firebasestorage.googleapis.com/v0/b/vitivlev-eb599.appspot.com/o/shop%2F4.jpg?alt=media&token=091526af-0bbc-4a62-95bb-3710ea53a6d8"
    },{
        link: "https://gum.co/abLVr",
        thumb: "https://firebasestorage.googleapis.com/v0/b/vitivlev-eb599.appspot.com/o/shop%2F4.jpg?alt=media&token=091526af-0bbc-4a62-95bb-3710ea53a6d8"
    },{
        link: "https://gum.co/mADl",
        thumb: "https://firebasestorage.googleapis.com/v0/b/vitivlev-eb599.appspot.com/o/shop%2F6.jpg?alt=media&token=38dd2a77-8ebf-4d0e-8af1-e2a75f512daf"
    },
]


var users = [
    {
        name: "Артем Гайнуллов",
        profile: "https://vk.com/grainzart",
        folder: "gainulov"
    },
    {
        name: "Виталий Щербаков",
        profile: "https://vk.com/alluretora",
        folder: "sherbakov"
    },
    {
        name: "Владимир Ершов",
        profile: "https://vk.com/ehoulet",
        folder: "ershov"
    },
    {
        name: "Данила Чернов",
        profile: "https://vk.com/danchernov",
        folder: "chernov"
    },
    {
        name: "Иван Барутов",
        profile: "https://vk.com/barutov",
        folder: "barutov"
    },
    {
        name: "Олег Skillup",
        profile: "https://vk.com/skills_up",
        folder: "skillup"
    },
    {
        name: "Олег Солодков",
        profile: "https://vk.com/id_son",
        folder: "solodkov"
    }
]

router.get('/', function (req,res, next) {
    res.render('index', {title: 'Виталик Ивлев', weeks: weeks, course: true})
});

router.get('/about', function (req,res, next) {
    res.render('about', {title: 'Об инструкторе', about: true})
})

router.get('/shop', function (req,res, next) {
    res.render('shop', {title: 'Магазин', shop: true, items: shop})
})

router.get('/students', function (req,res, next) {
    res.render('students', {title: 'Работы студентов', students: true, users: users })
})

module.exports = router;
