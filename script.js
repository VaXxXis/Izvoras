document.addEventListener('DOMContentLoaded', function() {
    // Функция для плавной прокрутки к якорю
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Плавный переход к якорю при клике на ссылку в меню
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target, 1000);

            // Установка активного элемента меню
            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Плавный переход к разделу "О Нас" при клике на кнопку "Подробнее о нас"
    const aboutButton = document.querySelector('.btn');
    aboutButton.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000);

        // Установка активного элемента меню
        menuLinks.forEach(link => link.classList.remove('active'));
        document.getElementById('nav-about').classList.add('active');
    });

    // Плавный переход к разделу "О Нас" при клике на стрелку прокрутки
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target, 1000);

            // Установка активного элемента меню
            menuLinks.forEach(link => link.classList.remove('active'));
            document.getElementById('nav-about').classList.add('active');
        });
    }

    // Подсветка активного элемента меню при скролле страницы
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        const sections = document.querySelectorAll('section[id]');
        let isActiveSet = false;

        sections.forEach(section => {
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('a[href="#' + sectionId + '"]');
            if (navLink) {
                const sectionTop = section.offsetTop - 50;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    menuLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                    isActiveSet = true;
                }
            }
        });

        // Установка активного элемента меню для раздела "Галерея"
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            const galleryTop = gallerySection.offsetTop - 50;
            const galleryHeight = gallerySection.clientHeight;
            if (scrollPosition >= galleryTop && scrollPosition < galleryTop + galleryHeight) {
                menuLinks.forEach(link => link.classList.remove('active'));
                document.getElementById('nav-gallery').classList.add('active');
                isActiveSet = true;
            }
        }

        // Установка активного элемента меню для раздела "Контакты" при прокрутке до footer
        const navContacts = document.getElementById('nav-contacts');
        const footer = document.querySelector('footer');

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }

        if (isInViewport(footer)) {
            // Подсветка раздела "Контакты" и снятие подсветки с "Галереи"
            navContacts.classList.add('active');
            document.getElementById('nav-gallery').classList.remove('active');
        } else {
            // Снятие подсветки с "Контактов" при скролле наверх от footer
            navContacts.classList.remove('active');
        }

        // Если не установлен ни один активный элемент, установить активный "О Нас"
        if (!isActiveSet) {
            document.getElementById('nav-about').classList.add('active');
        }
    });

    // Инициализация слайдера Slick с параметрами
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Скрипты для формы
    const appointmentButton = document.querySelector('.appointment-button');
    const popupForm = document.getElementById('popupForm');
    const closePopupForm = document.querySelector('#popupForm .close');
    const successMessage = document.getElementById('successMessage');
    const closeSuccessMessage = document.querySelector('#successMessage .close');

    if (appointmentButton) {
        appointmentButton.addEventListener('click', function() {
            // Открываем форму
            popupForm.style.display = 'block';

            // Очищаем значения полей формы
            document.getElementById('parentName').value = '';
            document.getElementById('childName').value = '';
            document.getElementById('childAge').value = '';
            document.getElementById('phone').value = ''; // Очищаем поле телефона
        });
    }

    if (closePopupForm) {
        closePopupForm.addEventListener('click', function() {
            popupForm.style.display = 'none';
        });
    }

    if (closeSuccessMessage) {
        closeSuccessMessage.addEventListener('click', function() {
            successMessage.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';
        } else if (event.target === successMessage) {
            successMessage.style.display = 'none';
        }
    });

    // Валидация и отправка формы
    const visitForm = document.getElementById('visitForm');
    if (visitForm) {
        visitForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const parentName = document.getElementById('parentName').value;
            const childName = document.getElementById('childName').value;
            const childAge = document.getElementById('childAge').value;
            let phone = document.getElementById('phone').value;

            // Проверка начала номера на +373
            if (!phone.startsWith('+373')) {
                alert('Номер телефона должен начинаться с +373.');
                return;
            }

            // Форматирование номера телефона: должно начинаться с +373 и допускать только цифры
            phone = phone.replace(/\D/g, ''); // Удаляем все нецифровые символы

            // Проверка на максимальную длину телефонного номера (вместе с +373)
            if (phone.length !== 11) {
                alert('Неверный формат номера телефона. Пожалуйста, введите корректный номер.');
                return;
            }

            if (parentName && childName && childAge && phone) {
                // Валидация пройдена, отправляем форму
                $.ajax({
                    type: 'POST',
                    url: 'send_email.php',
                    data: $(visitForm).serialize(),
                    success: function(response) {
                        if (response === 'success') {
                            popupForm.style.display = 'none';
                            successMessage.style.display = 'block';
                            alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте снова.');
                        } else {
                            popupForm.style.display = 'none';
                            successMessage.style.display = 'block';
                        }
                    },
                    error: function() {
                        popupForm.style.display = 'none';
                        successMessage.style.display = 'block';
                    }
                });
            } else {
                alert('Пожалуйста, заполните все поля.');
            }
        });
    }

    // Ограничение ввода символов в поле для номера телефона
    document.getElementById('phone').addEventListener('input', function() {
        this.value = this.value.replace(/[^\d+]/g, ''); // Удаляем все символы, кроме цифр и +
        if (this.value.length > 12) {
            this.value = this.value.slice(0, 12); // Ограничиваем длину в 15 символов
        }
    });

    // Подсветка активного элемента меню при загрузке страницы
    const activeSection = document.querySelector('section[id].active');
    if (activeSection) {
        const sectionId = activeSection.getAttribute('id');
        const navLink = document.querySelector('a[href="#' + sectionId + '"]');
        if (navLink) {
            menuLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    }
});
