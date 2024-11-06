const MyProductCard = ({ product }) => {
  const { title, description, price, discountPercentage, rating, thumbnail } =
    product;
  return (
    <div className="product-card">
      <img src={thumbnail} />
      <h1 className="product-title">{title}</h1>
      <p>{description}</p>
      <h2>
        {price} -{discountPercentage}
      </h2>
      <h3>{rating}</h3>
    </div>
  );
};

export default MyProductCard;
