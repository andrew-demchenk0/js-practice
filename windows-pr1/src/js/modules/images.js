export const images = () => {
  const imgPopup = document.createElement('div'),
    worksSection = document.querySelector('.works'),
    bigImg = document.createElement('img');

  imgPopup.classList.add('popup');
  worksSection.appendChild(imgPopup);
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  bigImg.style.width = '70wh';
  bigImg.style.height = '70vh';
  imgPopup.appendChild(bigImg);

  worksSection.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.body.classList.add('modal-open');
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
    }
    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
};
