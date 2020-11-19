const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

  menuElem.style.display = 'none';

  /* В условии задано, если display НЕСТРОГО равен 'none'
      И позовательская ширина экрана браузера меньше 993
  */
  burgerElem.addEventListener('click', () => {
    if(menuElem.style.display == 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });

  /* Если пользователь изменяет размеры экрана window*/
  window.addEventListener('resize', () => {
    if(window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};

export default burger;