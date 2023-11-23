import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetail } from '../template/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
        <div class="container-detail">
        <div id="likeButtonContainer"></div>
        </div>
        <form id="reviewForm">
      <label for="name">Name:</label>
      <input type="text" id="name" required>
      
      <label for="review">Review:</label>
      <textarea id="review" required></textarea>
      
      <button type="button" id="submitButton">Submit Review</button>
    </form>
        
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.container-detail');
    detailContainer.innerHTML = createRestaurantDetail(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
