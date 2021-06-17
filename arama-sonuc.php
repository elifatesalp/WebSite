<!DOCTYPE html>>
<html lang="tr">

       <head>
        <meta charset= "utf8"> 
        <title> Sonuç | Arama Motoru  </title>
        <link rel="stylesheet" href= "style.css">
       </head>
    <body>
<?php

    include("testsql.php");
    
    $aranan = $_POST["aranan"];
    $yazi_getir = "SELECT* FROM sayfa WHERE banner LIKE '%".$aranan."%'";
    $yazilari_ara = mysqli_query($yazi_getir);

    while($yazi=mysqli_fetch_array($yazilari_ara))

    {
        echo $yazi_getir['banner']. '<br><br>';
    }
     ?>
    
    <?php  
    
        echo "Aradığınız kelime bulunamadı.";
    ?> 
     <?php 
    {
         "Aramak için bir şeyler yazmalısınız";
    } 
    $conn->close(); ?>
    
    </body>
</html>
