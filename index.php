<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IZVORAȘ</title>
    <link rel="stylesheet" href="styles.css?v=1.0">
    <link rel="stylesheet" href="slick-master/slick/slick.css">
    <link rel="stylesheet" href="slick-master/slick/slick-theme.css">
    <link rel="stylesheet" href=" stylesMobile.css">
    <link rel="icon" href="images/logoTop.png" type="image/png">
</head>
<body>
    <nav>
        <div class="nav-container">
            <img src="images/burger1.png" alt="Меню" class="menu-icon"> 
            <img src="images/logo.png" alt="Logo" class="logo">
            <ul>
                <li><a href="#home" id="nav-home">ГЛАВНАЯ</a></li>
                <li><a href="#about" id="nav-about">О НАС</a></li>
                <li><a href="#teachers" id="nav-teachers">ПЕДАГОГИ</a></li>
                <li><a href="#gallery" id="nav-gallery">ГАЛЕРЕЯ</a></li>
                <li><a href="#contacts" id="nav-contacts">КОНТАКТЫ</a></li>
                <li><a href="?lang=ro" id="lang-ro" class="lang-link">RO</a> | <a href="?lang=ru" id="lang-ru" class="lang-link">RU</a></li>
            </ul>
        </div>
    </nav>

    <section id="home">
        <div class="overlay">
            <h1><span class="bold" id="home-heading">Детский сад IZVORAȘ</span></h1>
            <p class="larger" id="home-subtitle">Детский сад для детей от 2 до 7 лет!</p>
            <a href="#about" class="btn" id="home-read-more">Подробнее о нас</a>
        </div>
        <a href="#about" class="scroll-down-arrow">&#x2193;</a>
    </section>

    <section id="about">
        <div class="info-box">
            <h2 id="about-heading">Добро пожаловать в детский сад "IZVORAȘ"</h2>
            <p id="about-text">В нашем детском саду "IZVORAȘ" дети каждый день открывают для себя мир радости и знаний. Мы создаем уютную и безопасную среду, где каждый ребенок может чувствовать себя как дома, развивая свои уникальные таланты и способности.</p>
            <p id="about-text2">Наши заботливые и профессиональные воспитатели используют современные методы обучения, чтобы стимулировать любопытство и любовь к учебе. Мы предлагаем разнообразные образовательные программы, адаптированные для детей от 2 до 7 лет, включая творческие занятия и спортивные мероприятия.</p>
            <p id="about-text3">Присоединяйтесь к нам, и вы увидите, как ваш ребенок растет счастливым и успешным, каждый день делая шаги к своему светлому будущему!</p>
            <button class="appointment-button" id="about-schedule-visit">Запрограммировать визит</button>
        </div>
    </section>

    <section id="teachers">
        <h2 style="text-align: center; margin-top: 40px;" id="teachers-heading">Наши Педагоги</h2>
        <div class="teachers-container">
            <?php
            $servername = "localhost:3307";
            $username = "root";
            $password = ""; 
            $dbname = "kindergarten";

            // Создание подключения
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Проверка подключения
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Выполнение запроса
            $sql = "SELECT id, firstName, lastName, position, photo FROM teachers";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo '<div class="teacher">';
                    echo '<img src="' . $row["photo"] . '" alt="' . $row["firstName"] . ' ' . $row["lastName"] . '">';
                    echo '<h3 class="teacher-name">' . $row["firstName"] . ' ' . $row["lastName"] . '</h3>';
                    echo '<p class="teacher-position" id= "posTeach">' . $row["position"] . '</p>';
                    echo '</div>';
                }
            } else {
                echo "No results found";
            }

            $conn->close();
            ?>
        </div>
    </section>

    <section id="gallery">
        <h1 id="gallery-heading">Галерея</h1>
        <div class="gallery">
            <div class="slider">
                <div><img src="images/gallery1.jpg" alt="Image 1"></div>
                <div><img src="images/gallery2.jpg" alt="Image 2"></div>
                <div><img src="images/gallery3.jpg" alt="Image 3"></div>
                <div><img src="images/gallery4.jpg" alt="Image 4"></div>
                <div><img src="images/gallery5.jpg" alt="Image 5"></div>
            </div>
        </div>
        <div class="slider-dots"></div>
    </section>

    <!-- Всплывающая форма -->
    <div id="popupForm" class="popup-form">
        <span class="close">&times;</span>
        <form id="visitForm" action="send_email.php" method="post">
            <h2 id="popupForm-title">ЗАПИСАТЬСЯ</h2>
            <p id="popupForm-subtitle">Оставьте Ваш номер телефона и наш менеджер свяжется с Вами в ближайшее время</p>
            <br>
            <label for="parentName" id="popupForm-parentName-label">Имя родителя:</label>
            <input type="text" id="parentName" name="parentName" autocomplete="given-name" required>

            <label for="childName" id="popupForm-childName-label">Имя и фамилия ребенка:</label>
            <input type="text" id="childName" name="childName" required>

            <label for="childAge" id="popupForm-childAge-label">Возраст ребенка:</label>
            <input type="text" id="childAge" name="childAge" required>

            <label for="phone" id="popupForm-phone-label">Телефон:</label>
            <input type="text" value="+373" id="phone" name="phone" class="phone-input" placeholder="+373" required>

            <button type="submit" class="form-button" id="popupForm-submit">Отправить заявку</button>
        </form>
    </div>

    <!-- Сообщение об успешной отправке -->
    <div id="successMessage" class="success-message">
        <span class="close">&times;</span>
        <p id="successMessage-text">СПАСИБО!<br>Ваше сообщение успешно отправлено!<br>В ближайшее время, менеджер с Вами свяжется!</p>
    </div>

    <!-- Раздел КОНТАКТЫ -->
    <section id="contacts">
        <div class="overlay">
            <h2 id="contacts-heading">КОНТАКТЫ</h2>
            <div class="contacts-wrapper">
                <div class="contact-info">
                    <h3 id="contacts-phone-label">Номер телефона</h3>
                    <p id="contacts-phone">+373 7929 2478</p>
                </div>
                <div class="contact-info">
                    <h3 id="contacts-address-label">Адрес</h3>
                    <p id="contacts-address">с. Копанка, ул. Alba Iulia 12</p>
                </div>
            </div>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1626.4173798718791!2d29.62834195590861!3d46.719601490963925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c8ff1e9df74bf3%3A0xc4c889cd4ff2aec7!2zR3LEg2RpbmnFo2Egcy5Db3BhbmNh!5e0!3m2!1sru!2s!4v1718919411627!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-section about">
                <h3 id="footer-about-heading">О нас</h3>
                <p id="footer-about-text">Детский сад "IZVORAȘ" предлагает безопасную и креативную среду для развития вашего ребенка.</p>
                <div class="contact">
                    <span class="phone"><i class="fas fa-phone"></i> +373 7929 2478</span>
                    <span class="email"><i class="fas fa-envelope"></i> IZVORAȘ@gmail.com</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom" id="footer-bottom-text">
            &copy; 2024 Детский сад "IZVORAȘ". Все права защищены.
        </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="slick-master/slick/slick.min.js"></script>
    <script src="script.js" defer></script>
    <script src="language.js" defer></script>
    <script src="scriptMobile.js" defer></script>
</body>
</html>
