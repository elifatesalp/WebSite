<? require_once "testsql.php"; ?>
<!DOCTYPE html>>
<html lang="tr">
       <head>
        <meta charset= "utf8"> 
        <title> Sonuç | Arama Motoru Yapımı  </title>
        <link rel="stylesheet" href= "style.css">
       </head>
    <body>
<?php


    $conn = new mysqli('127.0.0.1', $sunucu, $user, $password, $database, $port);
    if ($conn->connect_errno != 0){
        die("Veritabanına bağlanamadı");
    }
   
$aranan = $_GET["aranan"];
if($aranan) {
    ?>
    <?php
   
    $yazi_getir=mysqli_query("SELECT * FROM yazilar WHERE yazilar_adi LIKE '%$aranan%'|| yazilar_icerik ORDER BY yazilar_id DESC");
    while($yazi_yaz = mysqli_fetch_array ($yazi_getir)){ 
    ?>

    <div class="yazi">
        <div class="baslik"><?php echo $yazi_yaz ["yazilar_adi"]; ?></div>
        <div class="icerik"><?php echo $yazi_yaz ["yazilar_icerik"]; ?></div>
    </div>
    <hr />
    <?php } ?>

    <?php } 
    else
    {
        echo '<div class="aramahata">Aradığınız kelime bulunamadı. </div>';
    } ?> 

     <?php 
      
    {
         "Aramak için bir şeyler yazmalısınız";
    } $conn->close(); ?>
    </body>
</html>
