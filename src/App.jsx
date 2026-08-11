import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Product, { productLoader } from "./pages/Product";
import Products, { productsLoader } from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Notfound from "./components/Notfound";
import Error from "./components/Error";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<RootLayout />}  errorElement={<Error />}>

        <Route index element={<Home />} />
       
        <Route 
        path="products" 
        element={<Products />}
        loader={productsLoader}
        />
        

        <Route
          path="products/:id"
          element={<Product />}
          loader={productLoader}
         
        />
       <Route path="contact" element={<Contact />}/>
        <Route path="cart" element={<Cart />} />

        <Route path="about" element={<About />} />

        <Route path="*" element={<Notfound />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
  
    
}

export default App;