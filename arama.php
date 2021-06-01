<html>
<head>
<meta http-equiv="Content-Type" content="siteici/html; charset=iso-8859-9" />
<title>Untitled Document</title>
</head>
<body>
<form method="post" action="arama.php">
<input type="text" name="search" size="25" maxlength="25" />
<input type="Submit" name="Submit" value="Submit" />
</form>
<?php
$search=$_POST["search"];
$result = mysql_query("SELECT * FROM makaleler WHERE makale LIKE '%$search%'");
$bulunan=0;
while($r=mysql_fetch_array($result))
{
$bulunan++;
$anasayfa=$r["anasayfa"];
$tarihce=$r["tarihce"];
$makale=$r["makale"];
$diller=$r["diller"];
$kullanim=$r["kullanim"];
$anket=$r["anket"];
$iletisim=$r["iletisim"];
$galeri=$r["galeri"];


echo "$makale -> $tarihce      ";
echo '<a href="'.$diller.'">"'.$diller.'"</a><br>';
}
if ($bulunan==0){echo "Hiç kayit bulunamadi.";} else {echo $bulunan." makale bulundu";}
?>
</body>
</html>
