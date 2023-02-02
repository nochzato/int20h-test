import React from 'react';
import classes from './ProductsItem.module.css';

export interface ProductsItemProps {
    title: string;
}

const ProductsItem: React.FC<ProductsItemProps> = (props) => {
    return <div className={classes.product_item_container}>
        <span>{props.title}</span>
    </div>;
}

export default ProductsItem;