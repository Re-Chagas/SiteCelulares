    
document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.overlay');
    var menuTrigger = document.querySelector('.menu-trigger');
  
    menuTrigger.addEventListener('click', function() {
      overlay.style.display = 'flex';
    });
  
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  });

//Carrosel

  var radio = document.querySelector('.manual-btn')
  var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 2000)

function proximaImg(){
    cont++

    if(cont > 5){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

