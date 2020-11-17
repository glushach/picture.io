import {getResource} from '../services/requests';

const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

  let sum = 0, sizeValue = '', materialValue = '', optionsValue = '';

  function changePram(event, elem) {
    elem.addEventListener(event, (e) => {
      const target = e.target,
            select = target.id;
   
    const calcFunc = () => {
      console.log(state[select]);
      for(let key in state[select]) {
        if(elem.value === key) {
          switch(select) {
            case "size":
              sizeValue = state[select][key];
              break;
            case "material":
              materialValue = state[select][key];
              break;
            case "options":
              optionsValue = state[select][key];
              break;
          }
        }
        console.log(state[select][key])
      }
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if(sizeBlock.value == '' || materialBlock.value == '') {
          resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if(promocodeBlock.value === 'IWANTPOPART') {
          resultBlock.textContent = Math.round(sum * 0.7);
        } else {
          resultBlock.textContent = sum;
        }
      }; //end calcFunc
      getResource('../../assets/calcPrice.json')
        .then(result => {
          calcFunc(result);
        })
        .catch(e => console.log(error))
    }); //end event
  } //end changePram

  sizeBlock.addEventListener('change', sizeBlock);
  materialBlock.addEventListener('change', materialBlock);
  optionsBlock.addEventListener('change', optionsBlock);
  promocodeBlock.addEventListener('input', promocodeBlock);

};//end module

export default calc;