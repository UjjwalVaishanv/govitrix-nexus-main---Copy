<?php
// Allow CORS for React frontend
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

$name = $data["name"];
$email = $data["email"];
$service = $data["service"];
$message = $data["message"];

// Email settings
$to = "sales@govitrix.com";        // YOUR email where you receive message
$subject = "IMPORTANT:- New Client Request - $name";
$body = "
    Name: $name
    Email: $email
    Service: $service
    Message: $message
";

$headers = "From: no-reply@govitrix.com\r\nReply-To: $email\r\n";

// Send the mail
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to send email"]);
}
?>

