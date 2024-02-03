import { Hardware } from "./hardware.category";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useEffect } from "react";

export const HardwareData = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products , setProducts ]  = useState(categoriesMap['hardware']);
    useEffect(() => {
        setProducts(categoriesMap['hardware'])
    }, [categoriesMap]); 
    
    return(
        products && <Hardware categoriesMap={products} />
    )    
}