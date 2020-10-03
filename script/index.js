'use strict';

import generateHeader from './generateHeader.js';
import generateCatalog from './generateCatalog.js';
import generateGoodsPage from './generateGoodsPage.js';
import generateFooter from './generateFooter.js';
import generateItemPage from './generateItemPage.js';
import loadData from './loadData.js';

generateHeader();
generateCatalog();
generateFooter();
generateGoodsPage();
generateItemPage();

loadData();
