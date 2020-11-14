const modals = () => {
  let btnPressed = false;

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();

    //CLICK ON TRIGGER - OPEN MODAL
    trigger.forEach(item =>{
      item.addEventListener('click', (e) => {
        if(e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if(destroy) {
          item.remove();
        }

        //close all modal
        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });

        //open modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    }); //end CLICK ON TRIGGER

    //CLICK ON CROSS - CLOSE MODAL
    close.addEventListener('click', () => {
      //close all modal
      windows.forEach(item => {
        item.style.display = 'none';
      });

      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    //CLICK ON SUBSTRATE - CLOSE MODAL
    modal.addEventListener('click', (e)=>{
      if(e.target === modal) {
        //close all modal
        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    }); //end event click
  } //end bindModal

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if(getComputedStyle(item).display != 'none') {
          display = "block";
        }
      });
      if(!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = "hidden";
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
        document.querySelector(selector).click();
      }
    });
  }

  //call function bindModal
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  openByScroll('.fixed-gift');

  //call function showModalByTime
  // showModalByTime('.popup-consultation', 5000);
};

export default modals;