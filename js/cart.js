
const iteam = document.querySelector('.container-cart__objs');

window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-cart')) {

    const card = event.target.closest('.card-iteam');
    const productInformatinon = {
      id: card.dataset.id,
      carName: card.querySelector('h2').innerText,
      img: card.querySelector('.prod-img').getAttribute('src'),
      carInformation: card.querySelector('p').outerHTML,

    };

    const cardData = `<div class="row iteam__shop " data-id="${productInformatinon.id}">
    <div class="col-lg-6">
      <img src="${productInformatinon.img}" alt="">
    </div>
    <div class="col align-self-center container-cart__objs__text">
      <h1>${productInformatinon.carName}</h1>
    ${productInformatinon.carInformation}
    </div>

    </div>`;

    iteam.insertAdjacentHTML('beforeend', cardData)


  }
})





