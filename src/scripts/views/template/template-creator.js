import CONFIG from '../../globals/config';

const createRestaurantTemplateItem = (restaurant) => `
<div class="restaurant-item">
<img class="lazyload" data-src="${CONFIG.SMALL_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name} ">
<div class="card-content">
  <div class="restaurant-name">
    ${restaurant.name}
    <span class="rating">⭐️ ${restaurant.rating}</span>
  </div>
  <div class="location">${restaurant.city}</div>
  <div class="description">${restaurant.description}</div>
  <div class="detail-button">
  <a href="/#/detail/${restaurant.id}">Details</a>
  </div>
</div>
</div>
`;

const createRestaurantDetail = (restaurant) => `
<div class="header-palsu"></div>
<div class="container-details">
<div id="likeButtonContainer"></div>
<img class="lazyload" class="restaurant-image-details" data-src="${
  CONFIG.MEDIUM_IMAGE_URL
}${restaurant.pictureId}" alt="${restaurant.name}">
<div class="restaurant-details">
  <div class="header-details">
    <div class="restaurant-name-details">${restaurant.name}</div>
    <div class="rating-details">⭐️ ${restaurant.rating}</div>
  </div>
  <div class="location-details">
    <span>City : ${restaurant.city}</span>
    <span>, Address : ${restaurant.address}</span>
  </div>
  <div class="description-details">
    ${restaurant.description}
  </div>
    <div class="menu-details">
        <div class="foods-container">
            <h2>Menu Makanan:</h2>
            <ul>
                ${restaurant.menus.foods
                  .map((food) => `<li>${food.name}</li>`)
                  .join('')}
            </ul>
        </div>
        <div class="beverages-container">
            <h2>Menu Minuman:</h2>
            <ul>
            ${restaurant.menus.drinks
              .map((drink) => `<li>${drink.name}</li>`)
              .join('')}
            </ul>
        </div>
    </div>
  </div>

</div>
<div class="review-section">
    <div class="review-container">
    <h2>Customer Reviews:</h2>
    <div class="customer-reviews">
    ${restaurant.customerReviews
      .map(
        (review) => `
        <div class="customer-review">
        <div class="customer-info">
            <strong>${review.name}</strong>
            <span>, ${review.date}</span>
        </div>
        <p>"${review.review}"</p>
        </div>
    `
      )
      .join('')}
    </div>
    </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
  <i class="ri-heart-add-line" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="likeButton" class="like">
    <i class="ri-heart-3-fill" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantTemplateItem,
  createRestaurantDetail,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
