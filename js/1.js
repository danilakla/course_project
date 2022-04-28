
const productsContainer = document.querySelector('#products-container')
//get inf from json
getProducts();


function getProducts() {
  const res = fetch('./js/baseOfProducts.json');
  const productsArray = res.json();
  renderProducts(productsArray);
}


//add the data to the html web-site
function renderProducts(productsArray) {
  productsArray.forEach(iteam => {
    const productHTML = `<div class="col-lg-6 card-iteam"  data-id="${iteam.id}" id="firstIteam">
    <div class="text__img">
      <img class="prod-img" src="${iteam.imgSrc}" alt="">
      <div class="txt">
        <h2>${iteam.tittle}</h2>
        <p>
         ${iteam.informationCAR}
        </p>
        <button data-cart href="" class="border-button">add to cart</button>
        <a href="${iteam.srcToAbout}" class="more">more information</a>

      </div>
    </div>
  </div>
`
    productsContainer.insertAdjacentHTML('beforeend', productHTML)
  });
}