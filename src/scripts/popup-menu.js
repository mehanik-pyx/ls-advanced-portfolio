(function (className) {
  const btn = document.querySelector(className);
  const bodyTag = document.querySelector('body');
  
  btn.addEventListener('click', (e) => {
    bodyTag.classList.toggle('overlay');
  });
})('.burger');