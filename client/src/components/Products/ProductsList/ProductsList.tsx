import React from 'react';
import ProductsItem from '../ProductsItem/ProductsItem';

import classes from './ProductsList.module.css';

interface ProductsListProps {
    products: string[];
}

const ProductsList: React.FC<ProductsListProps> = (props) => {
    return <div className={classes.products_list}>
        {props.products.map(product => {
            return <ProductsItem key={Math.random()} title={product}/>
        })}
    </div>;
}

export default ProductsList;