    
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
  