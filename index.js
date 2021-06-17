const bitirButton = document.getElementById('bitir-btn')
const gonderButton = document.getElementById('gonder-btn')
const tamamButton = document.getElementById('tamam-btn')
const aramaButton = document.getElemenyById ('arama-btn')


bitirButton.addEventListener('click', anketBitir)
gonderButton.addEventListener('click', formGonder)
tamamButton.addEventListener('click', gorusGonder)
aramaButton.addEventListener('clik', aramaYap)

function video() 
{
    return !!document.createElement('video').canPlayType; //video oynatıcı
}
    if ( !video() ) 
       {
          videoControls.style.display = 'none';
       }

function epostaDogrula(theform) //eposta adresindeki yanlış karater girince uyarı vermesi için fonksiyon
{
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theform.email-id.value))
    {
     return(true);
    }
    alert("Geçersiz e-posta adresi! Lütfen tekrar deneyiniz!");
     return(false);
 }
 
 function showDate() //tarih gösterme fonksiyonu
 {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; 
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }


 function hesap(){

var optDurum=false, opt="", sonuc=0; //hesap makinesi icin değişkenler

var btnRakam=document.querySelectorAll(".btnRakam");

var gosterge=document.querySelector("#gosterge");

var btnOpt=document.querySelectorAll(".btnOpt");

var islem=document.querySelector("#islem");

var btnC=document.querySelector(".btnC");

var btnCE=document.querySelector(".btnCE");

var btnEsit=document.querySelector(".btnEsit");

var btnNokta=document.querySelector(".btnNokta");


 btnRakam.forEach(function(element)
 {

    element.onclick = function(e)

    {

       if(gosterge.textContent=="0" || optDurum)

       {
       gosterge.textContent="";
       }

      gosterge.textContent=this.textContent;
      optDurum=false;
    }
 });

 btnOpt.forEach(function(element)
 {
   element.onclick=function(e)
   {
      optDurum=true;
      var yeniOpt=this.textContent; 
      
      islem.textContent=islem.textContent+" "+gosterge.textContent+" "+yeniOpt;
     
      switch(opt)
      {
             case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent)); break;
             case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent)); break;
             case "*":gosterge.textContent=(sonuc * Number(gosterge.textContent)); break;
             case "/":gosterge.textContent=(sonuc / Number(gosterge.textContent)); break;
             default:break;
       }

      sonuc=Number(gosterge.textContent);
      opt=yeniOpt;
}
 });

btnC.onclick=function(e)

{
   gosterge.textContent="0";
}

btnCE.onclick=function(e)

{
   gosterge.textContent="0";
   islem.textContent="";
   sonuc=0;
   opt="";
}

btnEsit.onclick=function(e)

{
   islem.textContent="";
   optDurum=true;

   switch(opt)
      {
             case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent)); break;
             case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent)); break;
             case "*":gosterge.textContent=(sonuc * Number(gosterge.textContent)); break;
             case "/":gosterge.textContent=(sonuc / Number(gosterge.textContent)); break;
             default:break;
       }

       sonuc=Number(gosterge.textContent);
       gosterge.textContent=sonuc;
       sonuc=0;
       opt="";
}

btnNokta.onclick=funstion(e)

{
    if(!optDurum && !gosterge.textContent.includes("."))  
    {
           gosterge.textContent+=".";
    } 
    else if(optDurum)
    {
           gosterge.textContent="0";
    }
    if(!gosterge.textContent.includes("."))
    {
           gosterge.textContent+=".";
    }
    optDurum=false;
    
}
}
