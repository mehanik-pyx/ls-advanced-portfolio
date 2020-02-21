const bodyTag = document.querySelector('body');

(function (className) {
  const btn = document.querySelector(className);
  
  btn.addEventListener('click', (e) => {
    bodyTag.classList.toggle('overlay');
  });
})('.burger');

(function (className) {
  const linkNList = document.querySelectorAll(className);
  Array.from(linkNList).forEach(link => {

    link.addEventListener('click', (e) => {
    bodyTag.classList.remove('overlay');
    });
  });
})('.nav__link');
