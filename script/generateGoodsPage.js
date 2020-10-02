import {getData} from './getData.js';

const wishList = ['idd007', 'idd056', 'idd077'];


const generateGoodsPage = () => {
  
  const generateCards = (data) => {
    goodsList.textContent = '';

    data.forEach(item => {
      goodsList.insertAdjacentHTML('afterbegin', `
        <li>${item.name}</li>
      `);
    })
  };

  const mainHeader = document.querySelector('.main-header');
  const goodsList = document.querySelector('.goods-list');

  if (location.pathname.includes('goods') && location.search) {
    const search = decodeURI(location.search);
    const prop = search.split('=')[0].slice(1);
    const value = search.split('=')[1];

    if (prop === 's') {
      getData.search(value, generateCards);
      mainHeader.textContent = `Поиск: ${value}`;
    } else if (prop === 'wishlist') {
      getData.wishList((wishList), generateCards);
      mainHeader.textContent = `Список желаний`;
    } else if (prop === 'cat' || prop === 'subcat') {
      getData.category(prop, value, generateCards);
      mainHeader.textContent = value;
    }
  }
};

export default generateGoodsPage;