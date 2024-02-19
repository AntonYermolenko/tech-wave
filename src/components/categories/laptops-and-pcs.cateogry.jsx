import { CategoryPreview } from "../category-preview/category-preview.component";
import { useContext, useState } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import { useEffect } from "react";

export const LaptopsAndPcs = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products , setProducts ]  = useState(categoriesMap['laptops&pcs']);
    
    useEffect(() => {
        setProducts(categoriesMap['laptops&pcs'])
    }, [categoriesMap]); 
    
    return(
        products && <CategoryPreview categoriesMap={products} />
    )    
}