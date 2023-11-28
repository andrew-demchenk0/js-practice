import { checkNumInputs } from './checkNumInputs';

export const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionsToElements(event, element, prop) {
    element.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i + 1;
            break;
          case 'INPUT':
            item.getAttribute('type') === 'checkbox'
              ? (state[prop] = i === 0 ? 'Cold❄︎' : 'Warm☀︎', element.forEach((box, j) => (box.checked = i === j)))
              : (state[prop] = item.value);
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }
      });
    });
  }

  bindActionsToElements('click', windowForm, 'form');
  bindActionsToElements('input', windowWidth, 'width');
  bindActionsToElements('input', windowHeight, 'height');
  bindActionsToElements('change', windowType, 'type');
  bindActionsToElements('change', windowProfile, 'profile');

};
