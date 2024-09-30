import "./Pagination.css";

const ProductCard = ({ title, price, discount, description, thumbnail }) => {
  console.log("thumbnail", thumbnail, description);
  return (
    <div className="product-card ">
      <img src={thumbnail} alt="img"></img>
      <h1 className="product-title">{title}</h1>
      <h2 className="product-price">
        Rs. ${price} - dicosunt of ${discount}%
      </h2>
      <p className="product-desc">{description}</p>
    </div>
  );
};

export default ProductCard;
