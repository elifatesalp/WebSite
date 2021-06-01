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
    return !!document.createElement('video').canPlayType; 
}
    if ( !video() ) 
       {
          videoControls.style.display = 'none';
       }

function epostaDogrula(theform) 
{
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theform.email-id.value))
    {
     return(true);
    }
    alert("Geçersiz e-posta adresi! Lütfen tekrar deneyiniz!");
     return(false);
 }
 
 function showDate() 
 {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; 
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }

