import { getLocalStorage, setLocalStorage } from './strorage.js';

const userData = {
  wishListData: getLocalStorage('wishList'),
  get wishList() {
    return this.wishlistData;
  },
  set wishList(id) {
    if (this.wishListData.includes(id)) {
      const index = this.wishListData.indexOf(id);
      this.wishListData.splice(index, 1);
    } else {
      this.wishListData.push(id);
      setLocalStorage('wishList', this.wishListData)
    }
  },
  cartListData: getLocalStorage('cartList'),
  get cartList() {
    return this.cartListData
  },
  set cartList(id) {
    let obj = this.cartListData.find(item => item.id === id);
    if (obj) {
      obj.count++;
    } else {
      obj = {
        id,
        count: 1,
      };
      this.cartList.push(obj);
      setLocalStorage('cartList', this.cartListData);
    }
  }
};

export default userData;