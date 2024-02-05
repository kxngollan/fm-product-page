import "./BottomImages.css";

const BottomImages = ({ product, handleIndex, index }) => {
  return (
    <div className="bottom-images">
      {product.images.map((image, i) => {
        return (
          <img
            src={image.small}
            alt=""
            className={`mini-image ${index === i ? "displaying" : ""}`}
            key={i}
            onClick={() => handleIndex(i)}
          />
        );
      })}
    </div>
  );
};

export default BottomImages;
