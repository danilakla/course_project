
//baner-slide
const side1 = document.getElementById('side1');
const side2 = document.getElementById('side2');
window.addEventListener('scroll', () => {
  side1.style.left = -window.pageYOffset + 'px';
  side2.style.left = window.pageYOffset + 'px';
})

//animation of the block
const boxC = document.querySelectorAll('.tittle__shop')

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxC.forEach(boxC => {
    let boxTOP = boxC.getBoundingClientRect().top
    if (boxTOP < triggerBottom) {
      boxC.classList.add('show')
    } else {
      boxC.classList.remove('show')
    }
  })
})

