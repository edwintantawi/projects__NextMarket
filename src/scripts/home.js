Products.getProductsByEvent('flashsale').forEach((product) => {
  document.getElementById('flash-sale-container').innerHTML +=
    createProductCard(product);
});
Products.getNormalProducts().forEach((product) => {
  document.getElementById('normal-sale-container').innerHTML +=
    createProductCard(product);
});

{
  /* <a href="#">
  `<div class="card__item">
    <div class="card__item__img__container">
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" class="card__item__img__photo">
    </div>
    <div class="card__item__product">
      <span class="card__item__discount">50%</span>
      <div class="card__item__price">
        <p class="card__item__price__normal">$109.95</p>
        <p class="card__item__price__hot">$54.957</p>
      </div>
      <h3 class="card__item__title">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </h3>
      <div class="card__item__seller">
        <img src="src/assets/icons/shop.svg" alt="icon shop" class="card__item__seller__icon">
        <p class="card__item__seller__name">Toko Siapa</p>
      </div>
      <div class="card__item__info">
        <img src="src/assets/icons/star.svg" alt="star" class="card__item__info__star">
        <p class="card__item__info__content">4.5</p>
        <span class="card__item__info__content">|</span>
        <p class="card__item__info__content">145 sold out</p>
      </div>
    </div>
  </div>
</a> */
}
