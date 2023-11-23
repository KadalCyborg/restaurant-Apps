const menuInfo = document.querySelector('#hamburgerButton');
const navbar = document.querySelector('.navbar');
const listItems = navbar.querySelectorAll('li');
const logo = document.querySelector('.logo');
const skipToContent = document.querySelector('.skip-link');
function isMobileWidth() {
  return window.matchMedia('(max-width: 880px)').matches;
}

// Atur tabindex berdasarkan media query
function updateTabIndex() {
  skipToContent.tabIndex = isMobileWidth() ? 1 : 0;
  logo.tabIndex = isMobileWidth() ? 1 : 0;
  menuInfo.tabIndex = isMobileWidth() ? 2 : -1;
  listItems.forEach((listItem, index) => {
    const tabIndexValue = isMobileWidth() ? index + 3 : 0;
    // eslint-disable-next-line no-param-reassign
    listItem.querySelector('a').tabIndex = tabIndexValue;
  });
}

// Tambahkan event listener pada resize untuk memperbarui tabindex
window.addEventListener('resize', updateTabIndex);

// Inisialisasi tabindex
updateTabIndex();
