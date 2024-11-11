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
        // Your SMTP configuration from the image
        $mail->isSMTP();
        $mail->Host = 'mail.envirosoln.in'; // SMTP server (from the image)
        $mail->SMTPAuth = true;
        $mail->Username = '_mainaccount@envirosoln.in'; // Your email (from the image)
        $mail->Password = 'wu?m?ozf2qzyE'; // Use your actual cPanel password here
        $mail->SMTPSecure = 'ssl'; // Encryption
        $mail->Port = 465; // SMTP Port (from the image)

        // Email headers
        $mail->setFrom('_mainaccount@envirosoln.in', 'Enviro Solution'); // Sender email
        $mail->addAddress('_mainaccount@envirosoln.in'); // Recipient email

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
