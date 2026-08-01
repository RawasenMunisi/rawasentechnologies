(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var toggle = document.getElementById('menuToggle');
    var nav = document.querySelector('nav.primary');
    if(!toggle || !nav) return;

    function closeMenu(){
      toggle.classList.remove('open');
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu(){
      toggle.classList.add('open');
      nav.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function(){
      var isOpen = nav.classList.contains('open');
      if(isOpen){ closeMenu(); } else { openMenu(); }
    });

    // Close menu when a nav link is tapped
    nav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', closeMenu);
    });

    // Close menu if window is resized back to desktop width
    window.addEventListener('resize', function(){
      if(window.innerWidth > 760){ closeMenu(); }
    });

    // Close menu on outside tap
    document.addEventListener('click', function(e){
      if(!nav.classList.contains('open')) return;
      if(nav.contains(e.target) || toggle.contains(e.target)) return;
      closeMenu();
    });
  });
})();
