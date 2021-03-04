<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include_once('index.php');



$Encodeddata = file_get_contents('php://input');
$Decodeddata = json_decode($Encodeddata,true);

$rand = rand(100, 9999);

$rand1 = "<strong>".$rand."</strong>";

$messageRand = "your number to activate password is\n".$rand1. "Thank you \n ToBeweb";


//$dest = "gamliel.chemla@gmail.com";
$suj = 'Reset Password ToBeweb';
//$c = "le club des inforamtitien";


$email = $Decodeddata['data']['email'];

echo $rand ;

//the first parameter is whose destination, second is the header from email, third is the content of mail
sendmail($email,$suj,$messageRand)



?>
