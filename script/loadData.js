import {getData} from './getData.js';

const wishList = ['idd007', 'idd056', 'idd077'];

const cardList = [{
    id: 'idd022',
    count: 2
  },
  {
    id: 'idd059',
    count: 3
  },
  {
    id: 'idd0100',
    count: 1
  }
];

export const loadData = () => {
  if (location.search) {
    const search = decodeURI(location.search);
    console.log(search);
    const prop = search.split('=')[0].slice(1);
    const value = search.split('=')[1];

    if (prop === 's') {
      getData.search(value, (data) => console.log(data))
    } else if (prop === 'wishlist') {
      getData.wishList((wishList), (data) => console.log(data));
    } else if (prop === 'cat' || prop === 'subcat') {
      getData.category(prop, value, (data) => console.log(data));
    }
  }

  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => console.log(data))
  }

  if (location.pathname.includes('cart')) {
    getData.cart(cartList, (data) => console.log(data));
  }
  
};

export default loadData;