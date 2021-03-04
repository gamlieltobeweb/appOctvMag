<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require './PHPMailer-master/src/Exception.php';
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';

function sendmail($destinataire,$sujet,$contenu){



$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = 2;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'gamliel.tobeweb@gmail.com';                     // SMTP username
    $mail->Password   = 'rina3004';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('gamliel.tobeweb@gmail.com', 'Reset Password ToBeweb');
    $mail->addAddress($destinataire);     // Add a recipient
    //$mail->addAddress('trump');               // Name is optional
    $mail->addReplyTo('ne-pas-repondre@gmail.com', 'Franck ToBeweb');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $sujet;
    $mail->Body    = $contenu;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients";

    $mail->send();
	$sucsses = true;
    echo $sucsses;
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

}

?>