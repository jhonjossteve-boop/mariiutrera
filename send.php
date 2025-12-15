<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // SMTP settings (replace with your cPanel email + password)
        $mail->isSMTP();
        $mail->Host       = 'mail.mariiutrera.my'; // cPanel mail server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'booking@mariiutrera.my';
        $mail->Password   = 'xernob-dodxix-fYnjo6';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        // From / To
        $mail->setFrom('booking@mariiutrera.my', 'Website Contact');
        $mail->addAddress('booking@mariiutrera.my'); // receive mail to same inbox

        // Content
        $mail->isHTML(true);
        $mail->Subject = $_POST['subject'];
        $mail->Body    = "Name: {$_POST['name']} <br>Email: {$_POST['email']} <br>Message:<br>{$_POST['message']}";

        $mail->send();
       echo '<div style="
    background-color: #d4edda; 
    color: #155724; 
    padding: 15px; 
    border-radius: 5px; 
    border: 1px solid #c3e6cb;
    font-weight: bold;
    text-align: center;
    max-width: 400px;
    margin: 20px auto;
">
✅ Message sent successfully!
</div>';

    } catch (Exception $e) {
        echo "Message could not be sent. Error: {$mail->ErrorInfo}";
    }
}
