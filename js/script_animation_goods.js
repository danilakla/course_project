
//animation blcks

const boxTittel = document.querySelector('.animat')
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4

  const boxTOP = boxTittel.getBoundingClientRect().bottom
  if (boxTOP < triggerBottom) {
    boxTittel.classList.add('show')
  } else {
    boxTittel.classList.remove('show')
  }
})

const boxCel = document.querySelectorAll('.iteam__el')

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxCel.forEach(boxCel => {
    let boxTOP = boxCel.getBoundingClientRect().top
    if (boxTOP < triggerBottom) {
      boxCel.classList.add('show')
    } else {
      boxCel.classList.remove('show')
    }
  })


})

const box = document.querySelector('.none-show')
window.addEventListener('load', () => {
  const triggerBottom = window.innerHeight / 5 * 4

  const boxTOP = box.getBoundingClientRect().top
  if (boxTOP < triggerBottom) {
    box.classList.add('show')
  } else {
    box.classList.remove('show')
  }
})