import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);


  btn.addEventListener('click', function() {
    getResource('assets/db.json')
      .then(result => createCards(result.styles))
      .catch(error => console.log(error));

    this.remove();
  });

  function createCards(response) {
    response.forEach(({src, title, link}) => {
      let card = document.createElement('div');

      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

      card.innerHTML = `
        <div class="styles-block">
          <img src="${src}" alt="">
          <h4>${title}</h4>
          <a href="${link}">Подробнее</a>
        </div>
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  }

/* <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
  <div class=styles-block>
    <img src=assets/img/styles-5.jpg alt>
    <h4>Пастелью</h4>
    <a href="#">Подробнее</a>
  </div>
</div> */

}; //ens module

export default showMoreStyles;