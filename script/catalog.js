import {getData} from './getData.js';
import generateSubCatalog from './generateSubCatalog.js';

const catalog = () => {
  const updateSubCatalog = generateSubCatalog();
  const btnBurger = document.querySelector('.btn-burger'),
    btnClose = document.querySelector('.btn-close'),
    catalog = document.querySelector('.catalog'),
    subCatalog = document.querySelector('.subcatalog');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.append(overlay);


  const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
  };

  const openSubMenu = (event) => {
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest('.catalog-list__item');
    if (itemList) {
      getData.subCatalog(target.textContent, (data) => {
        updateSubCatalog(target.textContent, data);
        subCatalog.classList.add('subopen');
      });
    }
  };

  const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
  }

  btnBurger.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  catalog.addEventListener('click', openSubMenu);
  subCatalog.addEventListener('click', event => {
    const btnReturn = event.target.closest('.btn-return');
    if (btnReturn) closeSubMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      closeMenu();
    }
  });
};


export default catalog;

