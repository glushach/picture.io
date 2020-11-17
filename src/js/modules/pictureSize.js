const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block) {
    const img = block.querySelector('img');
    // something.png => something-1.png
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(element => {
      element.style.display = 'none';
    });
  }//end fn showImg

  function hideImg(block) {
    const img = block.querySelector('img');
    // something-1.png => something.png
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(element => {
      element.style.display = 'block';
    });
  }//end fn hideImg

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });//end even nouseover
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });//end even nouseout
  });
};

export default pictureSize;