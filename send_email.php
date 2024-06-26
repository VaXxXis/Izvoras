<?php
// Подключение к базе данных
$servername = "localhost:3307";
$username = "root";
$password = ""; // пустой пароль 
$dbname = "kindergarten";

// Создание подключения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение данных из формы и обработка
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $parentName = clean_input($_POST['parentName']);
    $childName = clean_input($_POST['childName']);
    $childAge = clean_input($_POST['childAge']);
    $phone = clean_input($_POST['phone']);

    // Добавление данных в базу данных
    $sql = "INSERT INTO appointments (parentName, childName, childAge, phone) 
            VALUES ('$parentName', '$childName', '$childAge', '$phone')";

    if ($conn->query($sql) === TRUE) {
        // URL вашего Google Apps Script
        $script_url = 'https://script.google.com/macros/s/AKfycbzti15mwJc5mw9souUb-ch3brxzK7sV6fIlHYOUrE2zOFMNt0e9BPqyHCb0LjJ5AeDV_w/exec'; 

        // Формируем данные для отправки на Google Apps Script
        $data = array(
            'parentName' => $parentName,
            'childName' => $childName,
            'childAge' => $childAge,
            'phone' => $phone
        );

        // Выполняем POST запрос к Google Apps Script
        $ch = curl_init($script_url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        // Обрабатываем ответ от Google Apps Script
        if ($response == 'success') {
            echo "<h3>Данные успешно отправлены в Google Apps Script</h3>";
        } else {
            echo "<h3>Произошла ошибка при отправке данных в Google Apps Script</h3>";
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();

// Функция для очистки данных от потенциально опасных символов
function clean_input($data) {
    global $conn;
    return mysqli_real_escape_string($conn, htmlspecialchars(strip_tags($data)));
}
?>
