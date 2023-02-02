import React from 'react';
import Filter from '../../components/Filter/Filter';

const DUMMY_USER_PRODUCTS = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6'];

const FilterPage = () => {
    return <div>
        <Filter userProducts={DUMMY_USER_PRODUCTS}/>
    </div>
}

