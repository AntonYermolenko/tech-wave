import { CategoryPreview } from "../category-preview/category-preview.component";
import { useContext, useState } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import { useEffect } from "react";

export const GamesAndEntrtainment = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products , setProducts ]  = useState(categoriesMap['games&entertainment']);
    
    useEffect(() => {
        setProducts(categoriesMap['games&entertainment'])
    }, [categoriesMap]); 
    
    return(
        products && <CategoryPreview categoriesMap={products} />
    )    
}