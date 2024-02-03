import { ProductInfo } from "./product-info.component"
import { CategoriesContext } from "../contexts/categories.context";
import { useContext, useState, useEffect } from "react";


export const ProductPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products , setProducts ]  = useState(categoriesMap['hardware']);
    useEffect(() => {
        setProducts(categoriesMap['hardware'])
    }, [categoriesMap]);

    return(
        products && <ProductInfo categoriesMap={products} />
    )
}