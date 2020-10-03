import {getData} from './getData.js';
import userData from './userData.js';

const COUNT = 5;

const generateGoodsPage = () => {
  const mainHeader = document.querySelector('.main-header');
  
  const generateCards = (data) => {
      const goodsList = document.querySelector('.goods-list');
    
    goodsList.textContent = '';
    if (!data.length) {
      const goods = document.querySelector('.goods');
      goods.textContent = location.search === '?wishlist' ? 'Список желаний пуст' : 'К сожалению, по вашему запросу ничего не найдено';
    }

    data.forEach(item => {

      const { name, count, description, id, img: image, price } = item;

      goodsList.insertAdjacentHTML('afterbegin', `
        <li class="goods-list__item">
					<a class="goods-item__link" href="card.html#${id}">
						<article class="goods-item">
							<div class="goods-item__img">
								<img src=${image[0]}
                  ${image[1] ? 
                    `data-second-image=${image[1]}` : 
                    ''} alt=${name}>
							</div>
              ${count > COUNT ? `<p class="goods-item__new">Новинка</p>` : ''}
              ${!count ? `<p class="goods-item__new">Нет в наличии</p>` : ''}
							<h3 class="goods-item__header">${name}</h3>
							<p class="goods-item__description">${description}</p>
							<p class="goods-item__price">
								<span class="goods-item__price-value">${price}</span>
								<span class="goods-item__currency"> ₽</span>
              </p>
              ${count ? `<button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${id}"></button>` : ''}
							
						</article>
					</a>
				</li>
      `);
    });

    goodsList.addEventListener('click', (event) => {
      const btnAddCard = event.target.closest('.btn-add-card');

      if (btnAddCard) {
        event.preventDefault();
        userData.cartList = btnAddCard.dataset.idd;
      }
    });
    
  };

  if (location.pathname.includes('goods') && location.search) {
    const search = decodeURI(location.search);
    const prop = search.split('=')[0].slice(1);
    const value = search.split('=')[1];

    if (prop === 's') {
      getData.search(value, generateCards);
      mainHeader.textContent = `Поиск: ${value}`;
    } else if (prop === 'wishlist') {
      getData.wishList(userData.wishListData, generateCards);
      mainHeader.textContent = `Список желаний`;
    } else if (prop === 'cat' || prop === 'subcat') {
      getData.category(prop, value, generateCards);
      mainHeader.textContent = value;
    }
  }

};

export default generateGoodsPage;