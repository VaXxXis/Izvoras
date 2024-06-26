// Объект с переводами
const translations = {
    'ru': {
        'home-heading': 'Детский сад IZVORAȘ',
        'home-subtitle': 'Детский сад для детей от 2 до 7 лет!',
        'home-read-more': 'Подробнее о нас',
        'about-heading': 'Добро пожаловать в детский сад "IZVORAȘ"',
        'about-text': 'В нашем детском саду "IZVORAȘ" дети каждый день открывают для себя мир радости и знаний. Мы создаем уютную и безопасную среду, где каждый ребенок может чувствовать себя как дома, развивая свои уникальные таланты и способности.',
        'about-text2': 'Наши заботливые и профессиональные воспитатели используют современные методы обучения, чтобы стимулировать любопытство и любовь к учебе. Мы предлагаем разнообразные образовательные программы, адаптированные для детей от 2 до 7 лет, включая творческие занятия и спортивные мероприятия.',
        'about-text3': 'Присоединяйтесь к нам, и вы увидите, как ваш ребенок растет счастливым и успешным, каждый день делая шаги к своему светлому будущему!',
        'about-schedule-visit': 'Запрограммировать визит',
        'teachers-heading': 'Наши Педагоги',
        'nav-home': 'Главная',
        'nav-about': 'О нас',
        'nav-teachers': 'Педагоги',
        'nav-gallery': 'Галерея',
        'nav-contacts': 'Контакты',
        'gallery-heading': 'Галерея',
        'popupForm-title': 'ЗАПИСАТЬСЯ',
        'popupForm-subtitle': 'Оставьте Ваш номер телефона и наш менеджер свяжется с Вами в ближайшее время',
        'popupForm-parentName-label': 'Имя родителя:',
        'popupForm-childName-label': 'Имя и фамилия ребенка:',
        'popupForm-childAge-label': 'Возраст ребенка:',
        'popupForm-phone-label': 'Телефон:',
        'popupForm-submit': 'Отправить заявку',
        'successMessage-text': 'СПАСИБО!\nВаше сообщение успешно отправлено!\nВ ближайшее время, менеджер с Вами свяжется!',
        'contacts-heading': 'КОНТАКТЫ',
        'contacts-phone-label': 'Номер телефона',
        'contacts-phone': '+373 7929 2478',
        'contacts-address-label': 'Адрес',
        'contacts-address': 'с. Копанка, ул. Alba Iulia 12',
        'footer-about-heading': 'О нас',
        'footer-about-text': 'Детский сад "IZVORAȘ" предлагает безопасную и креативную среду для развития вашего ребенка.',
        'footer-bottom-text': '© 2024 Детский сад "IZVORAȘ". Все права защищены.'
    },
    'ro': {
        'home-heading': 'Grădinița IZVORAȘ',
        'home-subtitle': 'Grădinița pentru copii de la 2 la 7 ani!',
        'home-read-more': 'Află mai mult',
        'about-heading': 'Bine ați venit la grădinița "IZVORAȘ"',
        'about-text': 'În grădinița noastră "IZVORAȘ", copiii descoperă în fiecare zi lumea bucuriei și a cunoașterii. Creăm un mediu confortabil și sigur, în care fiecare copil se poate simți ca acasă, dezvoltându-și talentele și abilitățile unice.',
        'about-text2': 'Educatorii noștri îngrijitori și profesioniști folosesc metode moderne de predare pentru a stimula curiozitatea și dragostea de învățare. Oferim o varietate de programe educaționale adaptate copiilor de la 2 la 7 ani, inclusiv activități creative și evenimente sportive.',
        'about-text3': 'Alătură-te nouă și vei vedea cum copilul tău crește fericit și de succes, făcând pași către viitorul său luminos în fiecare zi!',
        'about-schedule-visit': 'Programați o vizită',
        'teachers-heading': 'Echipa noastră',
        'nav-home': 'Acasă',
        'nav-about': 'Despre noi',
        'nav-teachers': 'Profesori',
        'nav-gallery': 'Galerie',
        'nav-contacts': 'Contacte',
        'gallery-heading': 'Galerie',
        'popupForm-title': 'ÎNSCRIEȚI-VĂ',
        'popupForm-subtitle': 'Lăsați-vă numărul de telefon și managerul nostru vă va contacta în cel mai scurt timp',
        'popupForm-parentName-label': 'Numele părintelui:',
        'popupForm-childName-label': 'Numele și prenumele copilului:',
        'popupForm-childAge-label': 'Vârsta copilului:',
        'popupForm-phone-label': 'Telefon:',
        'popupForm-submit': 'Trimite cererea',
        'successMessage-text': 'VĂ MULȚUMIM!\nMesajul dvs. a fost trimis cu succes!\nÎn curând, un manager va lua legătura cu dvs.!',
        'contacts-heading': 'Contacte',
        'contacts-phone-label': 'Număr de telefon',
        'contacts-phone': '+373 7929 2478',
        'contacts-address-label': 'Adresă',
        'contacts-address': 's. Сopanka, str. Alba Iulia 12',
        'footer-about-heading': 'Despre noi',
        'footer-about-text': 'Grădinița "IZVORAȘ" oferă un mediu sigur și creativ pentru dezvoltarea copilului dumneavoastră.',
        'footer-bottom-text': '© 2024 Grădinița "IZVORAȘ". Toate drepturile rezervate.'
    }
};

// Функция для изменения языка
function changeLanguage(language) {
    const currentTranslations = translations[language];

    if (currentTranslations) {
        Object.keys(currentTranslations).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = currentTranslations[key];
            }
        });
    }
}

// Обработчики событий для переключения языков
document.getElementById('lang-ro').addEventListener('click', function (e) {
    e.preventDefault(); // Предотвращаем переход по ссылке
    changeLanguage('ro'); // Вызываем функцию с нужным языком
});

document.getElementById('lang-ru').addEventListener('click', function (e) {
    e.preventDefault(); // Предотвращаем переход по ссылке
    changeLanguage('ru'); // Вызываем функцию с нужным языком
});

// Инициализация страницы с текущим языком (можно выбрать любой из 'ru' или 'ro')
changeLanguage('ru'); // Установите язык по умолчанию при загрузке страницы
