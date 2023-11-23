import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantTemplateItem } from '../template/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class="hero">
      <div class="orverlay-element"></div>
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">
        <img src='./images/hero-image_1-large.jpg' 
             alt="dirt rally poster">
      </picture>
        <div class="hero__inner">
          <h1 class="hero__title">Journey into Gastronomy</h1>
          <p class="hero__tagline">
            Join Us in Uncovering the Secrets of Extraordinary Cuisine. Your Next Culinary Adventure Starts Here!
          </p>
        </div>
      </div>
    <section class="content">
    <h2>Restaurant List</h2>
    <div class="card-container" id="restaurantContainer"></div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurantContainer');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplateItem(restaurant);
    });
  },
};

export default RestaurantList;
