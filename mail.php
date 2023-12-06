<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $agree = isset($_POST['agree']) ? 'Погоджено' : 'Не погоджено';

  $to = "mega.denisenko@ukr.net";
  $subject = "Нове повідомлення з форми";

  $emailContent = "Ім'я: $name\n";
  $emailContent .= "Електронна пошта: $email\n";
  $emailContent .= "Повідомлення: $message\n";
  $emailContent .= "Погодження з обробкою персональних даних: $agree\n";

  mail($to, $subject, $emailContent);
}
?>

