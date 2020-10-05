import {getData} from './getData.js';
import userData from './userData.js';

const NEW_COUNT_ITEM = 5;

const generateItemPage = () => {

  const renderCard = ({ category, count, description, id, img, name: itemName, price, subcategory }) => {

    const goodImages = document.querySelector('.good-images');
    const goodItemNew = document.querySelector('.good-item__new');
    const goodItemHeader = document.querySelector('.good-item__header');
    const goodItemDescription = document.querySelector('.good-item__description');
    const goodItemEmpty = document.querySelector('.good-item__empty');
    const goodItemPriceValue = document.querySelector('.good-item__price-value');
    const btnGood = document.querySelector('.btn-good');
    const btnAddWishlist = document.querySelector('.btn-add-wishlist');
    const braedcrumbLink = document.querySelectorAll('.breadcrumb__link');

    braedcrumbLink[0].textContent = category;
    braedcrumbLink[0].href = `goods.html?cat=${category}`;
    braedcrumbLink[1].textContent = subcategory;
    braedcrumbLink[1].href = `goods.html?subcat=${subcategory}`;
    braedcrumbLink[2].textContent = itemName;

    goodImages.textContent = '';
    goodItemHeader.textContent = itemName;
    goodItemDescription.textContent = description;
    goodItemPriceValue.textContent = price;
    btnGood.dataset.idd = id;
    btnAddWishlist.dataset.idd = id;

    img.forEach(item => {
      goodImages.insertAdjacentHTML('afterbegin', `
        <div class="good-image__item">
					<img src="${item}" alt="${itemName} - ${description}">
				</div>
      `);
    });

    if (count > NEW_COUNT_ITEM) {
      goodItemNew.style.display = 'block';
    } else if (!count) {
      goodItemEmpty.style.display = 'block';
      btnGood.style.display = 'none';
    }

    const checkWishList = () => {
      if (userData.wishListData.includes(id)) {
        btnAddWishlist.classList.add('contains-wishlist');
      } else {
        btnAddWishlist.classList.remove('contains-wishlist');
      }
    }
    checkWishList();

    btnAddWishlist.addEventListener('click', () => {
      userData.wishList = id;
      checkWishList();
    });

    btnGood.addEventListener('click', () => {
      userData.cartList = id;
    });
  };

  if (location.hash && location.pathname.includes('card')) {
    getData.item(location.hash.substring(1), renderCard);
  }
}
export default generateItemPage;