import { Route, BrowserRouter, Routes, RouterProvider } from "react-router-dom";
import { SignIn } from "./components/sign-in/sign-in.component";
import { Authentication } from "./routes/authentication/authentication";
import { Hardware } from "./components/categories/hardware/hardware.category";
import { Checkout } from "./components/checkout/checkout.component";
import { ProductPage } from "./components/product-page/product-page.component";
import { Home } from "./routes/home/home.component";
import { ProductCarousel } from "./components/product-carousel/product-carousel.component";
import { HardwareData } from "./components/categories/hardware/hardware.category";
import { ComputerAndOffice } from "./components/categories/computer&office/computer-and-office.category";

const FirstPage = () => <p>Hello</p>

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="/" element={<ProductCarousel />} />
              <Route path="user" element={<Authentication />}/>
              <Route path="checkout" element={<Checkout />}/>
              <Route path="laptops&pcs"/>
              <Route path="coumputer&office" element={<ComputerAndOffice />} />
              <Route path="hardware" element={<HardwareData />}/>
              <Route path="product/:productId" element={<ProductPage />} />
              <Route path="entertainment"/>
            </Route>
          </Routes>
      </BrowserRouter>

  );
}

export default App;
