import {getData} from './getData.js';



export const loadData = () => {

  

  if (location.pathname.includes('cart')) {
    getData.cart(cardList, (data) => console.log(data));
  }
  
  
};

export default loadData;