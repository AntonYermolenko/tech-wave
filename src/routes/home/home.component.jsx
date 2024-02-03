import { Categories } from "../../components/categories/categories.component";
import { Footer } from "../../components/footer/footer.component";
import { Navbar } from "../../components/navigation/navigation.component";
import { Outlet } from "react-router-dom";
import './home.sytles.scss';
import { ProductCarousel } from "../../components/product-carousel/product-carousel.component";

export const Home = () => {
    return(
        <div className="home-container">
            <Navbar />
            <Categories />
            <Outlet />
        </div>

    );
} 