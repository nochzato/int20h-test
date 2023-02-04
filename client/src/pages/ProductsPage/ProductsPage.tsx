import React, {useCallback, useState} from 'react';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import ProductsSearch from '../../components/Products/ProductsSearch/ProductsSearch';

import classes from './ProductsPage.module.css';

const ProductsPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<string[]>([]);

    const searchProductsHandler = useCallback(async (query: string) => {
        const url = 'http://localhost:8080/ingredients';
        setIsLoading(true);

        if(!query){
            try{
                const response = await fetch(url);
                const ingredients = await response.json();
                setProducts(ingredients.ingredients);
                setIsLoading(false);
                return;
            }catch(err){
                console.log(err);
                return;
            }
        }

        try{
            const response = await fetch(url + '/' + query);
            const ingredients = await response.json();
            setProducts(ingredients.ingredients);
            setIsLoading(false);
        }catch(err){
            console.log(err);
            return;
        }
    }, [])

    return <div className={classes.products_page_container}>
        <ProductsSearch onSearch={searchProductsHandler}/>  
        {!isLoading && <ProductsList products={products}/>}
    </div>;
}

export default ProductsPage;