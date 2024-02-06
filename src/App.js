import { useState } from "react";
import "./App.css";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/navbar/Navbar";
import bigPhoto1 from "./components/images/image-product-1.jpg";
import bigPhoto2 from "./components/images/image-product-2.jpg";
import bigPhoto3 from "./components/images/image-product-3.jpg";
import bigPhoto4 from "./components/images/image-product-4.jpg";
import smallPhoto1 from "./components/images/image-product-1-thumbnail.jpg";
import smallPhoto2 from "./components/images/image-product-2-thumbnail.jpg";
import smallPhoto3 from "./components/images/image-product-3-thumbnail.jpg";
import smallPhoto4 from "./components/images/image-product-4-thumbnail.jpg";

function App() {
  const [cart, setCart] = useState([]);

  const product = {
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: "125.00",
    discountPercentage: 50,
    oldPrice: "250.00",
    images: [
      { big: bigPhoto1, small: smallPhoto1 },
      { big: bigPhoto2, small: smallPhoto2 },
      { big: bigPhoto3, small: smallPhoto3 },
      { big: bigPhoto4, small: smallPhoto4 },
    ],
  };

  const addToCart = (product, amount) => {
    for (let i = 0; i < amount; i++) {
      setCart([...cart, product]);
    }
  };

  return (
    <>
      <Navbar cart={cart} />
      <main>
        <ProductPage product={product} addToCart={addToCart} />
      </main>
    </>
  );
}

export default App;
