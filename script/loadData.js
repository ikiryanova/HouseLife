import {getData} from './getData.js';

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

  if (location.hash) {

  }

  if (location.pathname.includes('cart')) {
    getData.cart(cartList, (data) => console.log(data));
  }
  
  
};

export default loadData;