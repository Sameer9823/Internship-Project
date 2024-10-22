<?php
// Load Composer's autoloader
require 'vendor/autoload.php'; // Adjust the path according to your folder structure

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight request
    header("HTTP/1.1 200 OK");
    exit;
}

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the posted data
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $message = $data['message'];

    $mail = new PHPMailer(true);
    try {
        // Mailtrap SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io'; // Mailtrap SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = '0f97bd9e955c7a'; // Mailtrap username
        $mail->Password = 'f9c12e5821650d'; // Mailtrap password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Encryption
        $mail->Port = 587; // TLS port (alternative ports: 25, 465, 2525)

        // Email headers
        $mail->setFrom('factsbyai3@gmail.com', 'Enviro Solution'); // Correct sender email
        $mail->addAddress('factsbyai3@gmail.com'); // Correct recipient email

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "
            <h2>Contact Request</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong> $message</p>
        ";

        // Send email
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
}
