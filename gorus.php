<!DOCTYPE html>
<html>
<body>
    

<?php
if (isset($_POST['submit'])){
    print_r($_POST);

    echo "GÖRÜŞLERİNİZ BAŞARIYLA GÖNDERİLMİŞTİR! TEŞEKKÜR EDERİZ!";
}
else
{
    echo "GÖRÜŞLERİNİZ GÖNDERİLEMEDİ! LÜTFEN TEKRAR DENEYİNİZ.";
}
   ?>
</body>
   </html>   
