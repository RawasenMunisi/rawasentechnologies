(function(){
  var STORAGE_KEY = 'rt_theme';

  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-theme-btn') === theme);
    });
    var logo = document.getElementById('siteLogo');
    if(logo){
      var src = theme === 'dark' ? logo.dataset.darkSrc : logo.dataset.lightSrc;
      if(src){ logo.setAttribute('src', src); }
    }
    try{ localStorage.setItem(STORAGE_KEY, theme); }catch(e){}
  }

  document.addEventListener('DOMContentLoaded', function(){
    var saved = 'light';
    try{ saved = localStorage.getItem(STORAGE_KEY) || 'light'; }catch(e){}
    applyTheme(saved);
    document.querySelectorAll('.theme-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        applyTheme(btn.getAttribute('data-theme-btn'));
      });
    });
  });
})();
