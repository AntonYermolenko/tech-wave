import './hardware.styles.scss';
import { CategoriesContext } from '../../contexts/categories.context';
import { useContext, useState } from 'react';
import { useTransition } from 'react';
import { ItemsContainer } from '../../items-container/itemsContainer';

const subCategories = ["processor", "graphic card", "motherboard", "power supply"]

// categoriesMap[title].map((product) => ( console.log(product.subCategory))
// categoriesMap['hardware'].map((item) => console.log(item));

export const Hardware = ({categoriesMap}) => {
    const [filter, setFilter ] = useState('processor');
    const [filteredItems, setFitlredItems] = useState([]);
    
    
    const onClickHandler = (event) => {
        setFilter(event.target.innerHTML)
    }
    return(
        <ItemsContainer categoriesMap={categoriesMap} subCategories={subCategories} />
    )


  


}; 


