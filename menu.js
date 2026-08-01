(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var nav = document.querySelector('nav.primary');
    if(!nav) return;

    var submenuToggle = nav.querySelector('.submenu-toggle');
    var submenu = nav.querySelector('.submenu');
    if(!submenuToggle || !submenu) return;

    function closeSubmenu(){
      submenuToggle.classList.remove('open');
      submenu.classList.remove('open');
      submenuToggle.setAttribute('aria-expanded', 'false');
    }

    function openSubmenu(){
      submenuToggle.classList.add('open');
      submenu.classList.add('open');
      submenuToggle.setAttribute('aria-expanded', 'true');
    }

    submenuToggle.addEventListener('click', function(e){
      e.preventDefault();
      if(submenu.classList.contains('open')){ closeSubmenu(); }
      else{ openSubmenu(); }
    });

    // Close the dropdown once a service link is tapped
    submenu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', closeSubmenu);
    });

    // Close on outside tap
    document.addEventListener('click', function(e){
      if(!submenu.classList.contains('open')) return;
      if(submenu.contains(e.target) || submenuToggle.contains(e.target)) return;
      closeSubmenu();
    });

    // Close if resized to desktop width
    window.addEventListener('resize', function(){
      if(window.innerWidth > 760){ closeSubmenu(); }
    });
  });
})();
