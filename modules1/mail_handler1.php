<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$title = $_POST['title'];
$path = $_POST['path'];

require_once('/PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer(true); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "noreplytocsc@gmail.com";
$mail->Password = "Commnet@123";
$mail->SetFrom("noreplytocsc@gmail.com");
$mail->Subject = "JOB APPLICATION";
$mail->Body = "Name:"." ".$name."<br/><br/>"."Phone No:"." ".$phone."<br/><br/>"."Email:"." ".$email."<br/><br/>"."Job Title:"." ".$title;
$mail->AddAddress("noreplytocsc@gmail.com");
$mail->addAttachment($path);
//	ob_end_clean();
 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
    echo json_encode("Message has been sent");
 }
?>