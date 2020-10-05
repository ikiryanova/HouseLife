'use strict';

import generateHeader from './generateHeader.js';
import generateCatalog from './generateCatalog.js';
import generateGoodsPage from './generateGoodsPage.js';
import generateFooter from './generateFooter.js';
import generateItemPage from './generateItemPage.js';
import generateCartPage from './generateCartPage.js';
import sendCart from './sendCart.js';

generateHeader();
generateCatalog();
generateFooter();
generateGoodsPage();
generateItemPage();
generateCartPage();
sendCart();


