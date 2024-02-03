import { useState } from "react";
import { Card } from "../card/card.component";
export const ItemsContainer = ({categoriesMap, subCategories}) => {
    const [filter, setFilter] = useState();
    const [filteredItems, setFilteredItems ] = useState(categoriesMap)
    console.log(filter)

    const updatedItems = (e) => {
        const items = categoriesMap.filter((product) => product.subCategory === e.target.innerHTML);
        setFilteredItems(items)

    }

    return(
        <div className='hardware-container'>
            <div className='sub-category-container'>
                <h2>Filter:</h2>
                {   
                    subCategories.map((category) => (
                        <h2 onClick={updatedItems} >{category}</h2>
                    ))
                }
            </div>
            <div className='proudcts-container'>

               {
                <div className="shop-container">
                    {filteredItems.map((product) => <Card product={product} /> )}
                </div>
               }
             
            </div>
        </div>
    );
}