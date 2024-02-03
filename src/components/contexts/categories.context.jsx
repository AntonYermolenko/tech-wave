import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCatgeoriesAndDocuments } from "../../utils/firebase.utils";
import SHOP_DATA from '../shop-data.json';

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCatgeoriesAndDocuments();
            setCategoriesMap(categoryMap);
            
        }

        getCategoriesMap();
    }, [])
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, [])
    const value = { categoriesMap };
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}