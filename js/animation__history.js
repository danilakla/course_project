//animation of blocks
const box = document.querySelector('.none-show')
window.addEventListener('load', () => {

  box.classList.add('show')

})

const boxT = document.querySelector('.none-showTXT')
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight

  const boxTOP = boxT.getBoundingClientRect().top

  if (boxTOP < triggerBottom) {
    boxT.classList.add('show')
  } else {
    boxT.classList.remove('show')
  }
})

const boxC = document.querySelectorAll('.iteam__car')
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight;

  boxC.forEach(boxC => {
    const boxTOP = boxC.getBoundingClientRect().top
    if (boxTOP < triggerBottom) {
      boxC.classList.add('show')
    } else {
      boxC.classList.remove('show')
    }
  })


})


const boxqual = document.querySelector('.boxs')
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight

  const boxTOP = boxqual.getBoundingClientRect().top
  if (boxTOP < triggerBottom) {
    boxqual.classList.add('show')
  } else {
    boxqual.classList.remove('show')
  }
})

const boxMain_txt = document.querySelector('.main-txt')
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight

  const boxTOP = boxMain_txt.getBoundingClientRect().top
  if (boxTOP < triggerBottom) {
    boxMain_txt.classList.add('show')
  } else {
    boxMain_txt.classList.remove('show')
  }
})
