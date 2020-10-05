import userData from './userData.js';

const sendCart = () => {

  const sendData = async (url, data) => {

    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
  };

  const sendForm = () => {
    const cartForm = document.querySelector('.cart-form');

    cartForm.addEventListener('submit', e => {
      e.preventDefault();

      // const formData = new FormData(cartForm);

      //formData.set('order', JSON.stringify(userData.cartList)); //или так если не работает FormData

      const data = {};

      for (const [key, value] of formData) {
        data[key] = value;
      }

      data.order = userData.cartList;

      sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
        .then(() => {
          cartForm.reset();
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  sendForm();

};

export default sendCart;

