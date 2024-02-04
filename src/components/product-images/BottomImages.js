import React from "react";
import "./BottomImages.css";
import mini1 from "../images/image-product-1.jpg";
import mini2 from "../images/image-product-2.jpg";
import mini3 from "../images/image-product-3.jpg";
import mini4 from "../images/image-product-4.jpg";

const BottomImages = () => {
  const mini = [mini1, mini2, mini3, mini4];
  return (
    <div className="bottom-images">
      {mini.map((image, index) => {
        return <img src={image} alt="" className="mini-image" key={index} />;
      })}
    </div>
  );
};

export default BottomImages;
