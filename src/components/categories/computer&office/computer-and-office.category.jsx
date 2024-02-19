import { CategoryPreview } from "../../category-preview/category-preview.component";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useEffect } from "react";

export const ComputerAndOffice = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products , setProducts ]  = useState(categoriesMap['computer&office']);

    useEffect(() => {
        setProducts(categoriesMap['computer&office'])
    }, [categoriesMap]); 
    
    return(
        products && <CategoryPreview categoriesMap={products} />
    )    
}