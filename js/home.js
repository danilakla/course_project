
//slider
//video-slide
document.querySelector('#prevControl').addEventListener('click', prev)
document.querySelector('#nextControl').addEventListener('click', next)

const sliederSh = document.getElementById('slideShow');
const slides = sliederSh.getElementsByTagName('video');

let index = 0;
function next() {
  nextTXT()
  slides[index].classList.remove('active__video');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active__video');
}
function prev() {
  prevTXT()
  slides[index].classList.remove('active__video');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active__video');
}

//text-slide
const sliederShTXT = document.getElementById('slideShowTEXT');
const slidesTXT = sliederShTXT.getElementsByTagName('section');

let i = 0;
function nextTXT() {
  slidesTXT[i].classList.remove('active');
  i = (i + 1) % slidesTXT.length;
  slidesTXT[i].classList.add('active');
}
function prevTXT() {
  console.log('txt prev');

  slidesTXT[i].classList.remove('active');
  i = (i - 1 + slidesTXT.length) % slidesTXT.length;
  slidesTXT[i].classList.add('active');
}

