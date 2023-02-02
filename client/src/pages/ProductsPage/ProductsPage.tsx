import React from 'react';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import ProductsSearch from '../../components/Products/ProductsSearch/ProductsSearch';

import classes from './ProductsPage.module.css';

const DUMMY_PRODUCTS = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8'];

const ProductsPage = () => {
    return <div className={classes.products_page_container}>
        <ProductsSearch/>  
        <ProductsList products={DUMMY_PRODUCTS}/>
    </div>;
}

export default ProductsPage;