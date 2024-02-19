import { Route, BrowserRouter, Routes, RouterProvider } from "react-router-dom";
import { Authentication } from "./routes/authentication/authentication";
import { Checkout } from "./components/checkout/checkout.component";
import { ProductPage } from "./components/product-page/product-page.component";
import { Home } from "./routes/home/home.component";
import { ProductCarousel } from "./components/product-carousel/product-carousel.component";
import { HardwareData } from "./components/categories/hardware.category";
import { ComputerAndOffice } from "./components/categories/computer-and-office.category";
import { LaptopsAndPcs } from "./components/categories/laptops-and-pcs.cateogry";
import { GamesAndEntrtainment } from "./components/categories/games-and-etertainment-category";

const FirstPage = () => <p>Hello</p>

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="/" element={<ProductCarousel />} />
              <Route path="user" element={<Authentication />}/>
              <Route path="checkout" element={<Checkout />}/>
              <Route path="laptops&pcs" element={<LaptopsAndPcs />} />
              <Route path="computer&office" element={<ComputerAndOffice />} />
              <Route path="hardware" element={<HardwareData />}/>
              <Route path="games&entertainment" element={<GamesAndEntrtainment />} />
              <Route path="product/:productId" element={<ProductPage />} />
            </Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
