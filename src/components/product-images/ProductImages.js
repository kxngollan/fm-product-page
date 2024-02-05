import React, { useState } from "react";
import MainImage from "./MainImage";
import BottomImages from "./BottomImages";
import "./ProductImages.css";
import ModalImages from "./ModalImages";
import MobileImages from "./MobileImages";

const ProductImages = ({ product }) => {
  const [index, setIndex] = useState(0);
  const [imageModal, setImageModal] = useState(false);

  const handleIndex = (n) => {
    setIndex(n);
  };

  return (
    <div className="product-images">
      {imageModal ? (
        <ModalImages
          product={product}
          closeModal={() => {
            setImageModal(false);
          }}
        />
      ) : (
        ""
      )}
      <MobileImages product={product} index={index} handleIndex={handleIndex} />
      <MainImage
        product={product}
        index={index}
        openModal={() => setImageModal(true)}
      />
      <BottomImages product={product} index={index} handleIndex={handleIndex} />
    </div>
  );
};

export default ProductImages;
