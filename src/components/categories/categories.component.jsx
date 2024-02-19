import pc from "../../computer-solid.svg";
import hardware from "../../microchip-solid.svg";
import mouse from "../../computer-mouse-solid.svg";
import gamepad from "../../gamepad-solid.svg";
import "./categories.styles.css";
import { Route, RouterProps } from "react-router-dom";
import { Link } from "react-router-dom";

const categories = [
    {
        id: 1,
        title: "Laptops & PCs",
        image: pc,
        route: "/laptops&pcs",
    },
    {
        id: 2,
        title: "Computer & Office",
        image: mouse,
        route: "/computer&office",
    },
    {
        id: 3,
        title: "Hardware & Components",
        image: hardware,
        route: "/hardware",
    },
    {
        id: 4,
        title: "Games & Entertainment",
        image: gamepad,
        route: "/games&entertainment",
    },
]

export const Categories = () => {
    return(
        <div className="categories-container">
            {categories.map(({title, image, route}) => (
                <div className="categories-element">
                    <Link to={route} >
                        <div>
                            <span><img src={image} className="categories-icon" /></span>
                            <h2 className="title">{title}</h2>
                        </div>
                    </Link>
                </div>
            ))} 
        </div>

    )
}