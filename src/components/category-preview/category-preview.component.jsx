import './category-preview.styles.scss';
import { ItemsContainer } from '../items-container/itemsContainer';


export const CategoryPreview = ({categoriesMap}) => {
    
    return(
        <ItemsContainer categoriesMap={categoriesMap} />
    )
  


}; 


