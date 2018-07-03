 <?php

  if(! exec('grep '.escapeshellarg($_GET['id']).' ./uuids.txt')) {

	$myfile = fopen("subscribelist.txt", "w") or die("Unable to open file!");
	$subscriber = $_GET["email"];
	fwrite($myfile, $subscriber);
	fclose($myfile);

	$to      = $subscriber;
	$subject = "You have subscribed to Indian Rover Challenge's updates";
	$message = 'You have received this email because you have subscribed to IRC 2019 updates.';
	$headers = 'From: indianroverchallenge2019@gmail.com' . "\r\n" .
	    'Reply-To: indianroverchallenge2019@gmail.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);

     
    }


$to      = 'indianroverchallenge2019@gmail.com';
$subject = 'New Subscriber';
$message = 'Hello we have a new subscriber in {$subscriber}';
$headers = 'From: tushki.shahi@gmail.com' . "\r\n" .
    'Reply-To: tushki.shahi@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);




?> 