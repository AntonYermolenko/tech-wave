import './product-carousel.styles.scss';

import LeftArrow from '../../arrow-prev-small-svgrepo-com.svg';
import RightArrow from '../../arrow-next-small-svgrepo-com.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Circle, CircleDot } from 'lucide-react';

const images = [
    "https://www.notebookcheck.net/fileadmin/_processed_/4/a/csm_Untitled6899_508d4b2fc3.jpg",
    "https://cdn.vox-cdn.com/thumbor/ryv1T3KGIqmH8LOkOrtTAo-eRO4=/0x0:2420x2071/2000x1333/filters:focal(1210x1036:1211x1037)/cdn.vox-cdn.com/uploads/chorus_asset/file/24054838/AMD_Ryzen_7000_Desktop_CPU_Lineup_low_res_scale_4_00x_Custom.png",
    "https://cdn.mos.cms.futurecdn.net/Ze6XggwqCN3H8svBucnSjG-1200-80.jpg"
    

]

const CategoryImages = [
    {
        "id": 1,
        "title": "Graphic Cards",
        "ImageUrl": "https://www.notebookcheck.net/fileadmin/_processed_/4/a/csm_Untitled6899_508d4b2fc3.jpg",
        "path": "graphic-cards"
    },
    {
        "id": 2,
        "title": "Processors",
        "ImageUrl": "https://cdn.vox-cdn.com/thumbor/ryv1T3KGIqmH8LOkOrtTAo-eRO4=/0x0:2420x2071/2000x1333/filters:focal(1210x1036:1211x1037)/cdn.vox-cdn.com/uploads/chorus_asset/file/24054838/AMD_Ryzen_7000_Desktop_CPU_Lineup_low_res_scale_4_00x_Custom.png",
        "path": "processors"
    },
    {
        "id": 3,
        "title": "Motherboards",
        "ImageUrl": "https://cdn.mos.cms.futurecdn.net/Ze6XggwqCN3H8svBucnSjG-1200-80.jpg",
        "path": ""

    }
]


export const ProductCarousel = ({ImageUrls}) => {

    const showNextImage = () => {
        setImageIndex(index => {
            if (index === images.length - 1 ) return 0
            return index + 1 
        })
    }

    const showPrevImage = () => {
        setImageIndex(index => {
            if (index === 0 ) return images.length - 1
            return index - 1 
        })
    }

    

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className='product-carousel-container ' >
            <div className='product-carousel'>
                <div style={{overflow: "hidden", height: "100%", width: "100%", display: "flex", "border-radius": "20px"}} >
                    {CategoryImages.map(({ImageUrl,path}) => (
                        <div className='carousel-img'>
                            <Link to={`/hardware/${path}`}  >
                                <img src={ImageUrl} className='carousel-img' style={{ translate: `${-100 * imageIndex}%` }}/>
                            </Link>
                        </div>
                    )
                    )}
                </div>
                    <button className='img-slider-btn' style={{ left: 0 }} onClick={showPrevImage}>
                        <img src={LeftArrow} className='button-icon' />
                    </button>
                    <button className='img-slider-btn' style={{ right: 0 }} onClick={showNextImage}>
                        <img src={RightArrow} className='button-icon' />
                    </button>
                <div className='img-index-button-container'>
                    {CategoryImages.map(({id}) => (
                        <button onClick={()=> setImageIndex(id - 1)} className='img-slider-dot-button'>{
                            (id - 1)  === imageIndex ? 
                            <CircleDot />
                            : <Circle />
                            }
                        </button>
                    ))}
                </div>
            </div>
               
        </div>

    )
    
    
}

