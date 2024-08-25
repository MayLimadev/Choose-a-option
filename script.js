const buttons = document.querySelectorAll('button');
const gifs = document.querySelectorAll('img');
const textoH2 = document.querySelector('.textBtnNo h2');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    textoH2.style.display = button.id === 'button-no' ? 'block' : 'none';
    gifs.forEach((gif, gifIndex) => {
      gif.style.display = gifIndex === index ? 'block' : 'none';
    });
  });
});



