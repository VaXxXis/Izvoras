<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Здесь можно добавить код для отправки email
    $to = "your_email@example.com";
    $subject = "Новое сообщение с сайта Romashki";
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение отправлено успешно.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
