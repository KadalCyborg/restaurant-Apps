import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplateItem } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="header-palsu"></div>
    <section class="content">
    <h2>Your Favorite Restaurants</h2>
    <div class="card-container" id="restaurantContainer"></div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurantContainer');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplateItem(restaurant);
    });
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
      <div class="restaurant-item__not__found">
        Tidak ada restaurant untuk ditampilkan
      </div>
    `;
    }
  },
};

export default Favorite;
