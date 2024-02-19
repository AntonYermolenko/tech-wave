import { useState } from "react";
import { Card } from "../card/card.component";
export const ItemsContainer = ({categoriesMap}) => {

    const [filteredItems, setFilteredItems ] = useState(categoriesMap)

    return(
        <div className='hardware-container'>
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