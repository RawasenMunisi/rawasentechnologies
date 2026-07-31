(function(){
  var STORAGE_KEY = 'rt_lang';

  function applyLang(lang){
    document.querySelectorAll('[data-sw]').forEach(function(el){
      if(el.dataset.en === undefined){ el.dataset.en = el.innerHTML; }
      el.innerHTML = lang === 'sw' ? el.dataset.sw : el.dataset.en;
    });
    document.querySelectorAll('[data-sw-placeholder]').forEach(function(el){
      if(el.dataset.enPlaceholder === undefined){ el.dataset.enPlaceholder = el.getAttribute('placeholder') || ''; }
      el.setAttribute('placeholder', lang === 'sw' ? el.dataset.swPlaceholder : el.dataset.enPlaceholder);
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.documentElement.setAttribute('lang', lang);
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
  }

  document.addEventListener('DOMContentLoaded', function(){
    var saved = 'en';
    try{ saved = localStorage.getItem(STORAGE_KEY) || 'en'; }catch(e){}
    applyLang(saved);
    document.querySelectorAll('.lang-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  });
})();
