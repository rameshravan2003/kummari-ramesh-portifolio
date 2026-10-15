(function(){
  var btn=document.querySelector('.menu-btn'),links=document.getElementById('nav-links');
  btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  links.addEventListener('click',function(e){if(e.target.tagName==='A'){links.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  document.getElementById('year').textContent=new Date().getFullYear();
  // No backend: the form composes an email in the visitor's own mail app.
  document.getElementById('contact-form').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var body='Name: '+f.name.value+'\nEmail: '+f.email.value+'\n\n'+f.message.value;
    window.location.href='mailto:rameshravan65@gmail.com?subject='+encodeURIComponent(f.subject.value)+'&body='+encodeURIComponent(body);
  });
})();
