import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import ListProducts from "./products/ListProducts";

const Home = () => {
  return (
    <div>
      {/* منوی  بالبایی  سایت   */}
      <Navbar />
      <br />
      <br />
      {/* اسلایدر   */}
      <Slider />

      <br />
      <br />

      {/* لیست  محصولات   */}
      <ListProducts />
    </div>
  );
};

export default Home;
