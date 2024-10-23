import React from "react";

import "./Pagination.css";

const ProductCard = ({ product }) => {
  const { title, description, price, thumbnail, discount } = product;
  return (
    <div className="product-card">
      <img src={thumbnail} alt="img"></img>
      <h1 className="product-title">{title}</h1>
      <h2 className="product-price">
        Rs. ${price} - discount of ${discount}%
      </h2>
      <p className="product-desc">{description}</p>
    </div>
  );
};

export default React.memo(ProductCard);
