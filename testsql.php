<!DOCTYPE html>
<html>
<body>
    
<?php

$sunucu = "localhost";
$user = 'root';
$password = ''; 
$database = 'arama'; 
$port = NULL; 
$mysqli = new mysqli('127.0.0.1', $sunucu, $user, $password, $database, $port);

if ($mysqli->connect_error) {

    die('Connect Error (' . $mysqli->connect_errno . ') '

            . $mysqli->connect_error);
}
echo '<p>Connection OK '. $mysqli->host_info.'</p>';

$mysqli->close();
?>
</body>
   </html>   

