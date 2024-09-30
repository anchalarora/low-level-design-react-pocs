// fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Pagination.css";

const limit = 20; // number of items to be shown in a page

const Pagination = () => {
  const [products, setProduts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // to maintain the skip value
  const [noOfPages, setNoOfPages] = useState(0); // for pages count

  // 0 -> 0 items to skip
  // 1 => 1*10 => 10
  // 2 => 2*10 => 20

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${
        currentPage * limit
      }`
    );

    const data = await response.json();
    setProduts(data.products);
    setNoOfPages(Math.ceil(data.total / limit));
  };

  const handlePrev = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  return (
    <div>
      <div className="pagination-container">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      <div className="pages">
        {currentPage > 0 && <span onClick={handlePrev}>Prev</span>}

        {[...Array(noOfPages).keys()].map((pageNo) => (
          <span
            className={`each-page-no ${
              currentPage === pageNo ? "each-page-no-active" : " "
            }`}
            key={pageNo}
            onClick={() => setCurrentPage(pageNo)}
          >
            {pageNo + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && <span onClick={handleNext}>Next</span>}
      </div>
    </div>
  );
};

export default Pagination;
