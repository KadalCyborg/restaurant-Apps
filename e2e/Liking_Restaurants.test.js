const assert = require('assert');
const { pause } = require('codeceptjs');

Feature('Liking And Unliking Restaurants');

Scenario('Liking one Restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item__not__found'
  );

  I.amOnPage('/');

  I.seeElement('.restaurant-name');
  const firstRestaurantDetail = locate('.detail-button a').first();
  const firstRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  I.click(firstRestaurantDetail);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one Restaurant', async ({ I }) => {
  // simulasikan seakan" pengguna melakukan liking terlebih dahullu
  I.amOnPage('/');
  I.seeElement('.restaurant-name');
  const firstRestaurantDetail = locate('.detail-button a').first();
  I.click(firstRestaurantDetail);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name-details');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  // simulasi unliking
  I.amOnPage('/');
  const favoritePageButton = locate('#navigationDrawer')
    .find('a')
    .withText('Favorite');
  I.click(favoritePageButton);

  I.seeElement('.restaurant-item');
  I.click('.detail-button a');
  const restaurantName = await I.grabTextFrom('.restaurant-name-details');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement(locate('.restaurant-name').withText(restaurantName));
});
