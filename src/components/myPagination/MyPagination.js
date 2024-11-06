import { useEffect, useState } from "react";
import MyProductCard from "./MyProductCard";
import "./MyPagination.css";

const MyPagination = () => {
  const limit = 20;
  const [currentPage, setCurrentPage] = useState(0);

  const [inputText, setInputText] = useState("");

  const [noOfPages, setNoOfPages] = useState(0);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [products, setProducts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const fetchProducts = async () => {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${
      currentPage * limit
    }`;

    const result = await fetch(url);

    const data = await result.json();

    console.log(data);

    setProducts(data.products);
    setFilteredProducts(data.products);
    setNoOfPages(Math.ceil(data.total / limit));
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePrev = () => {
    setCurrentPage((currentPage) => {
      currentPage = currentPage - 1;
    });
  };

  const handleNext = () => {
    setCurrentPage((currentPage) => {
      currentPage = currentPage + 1;
    });
  };

  const handleSearch = () => {
    if (inputText.length === 0) {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(inputText.toLowerCase())
      );
    }
    setFilteredProducts(filteredProducts);
  };

  const handleInputSearch = (text) => {
    if (searchTimeout) clearTimeout(searchTimeout);

    const timeout = setTimeout(() => {
      if (text.length === 0) {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    }, 300); // Adjust delay as needed (300ms is common)

    setSearchTimeout(timeout);
  };

  return (
    <div>
      <div className="search-container">
        <input
          placeholder="Enter the product"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            handleInputSearch(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="product-list-container">
        {filteredProducts.map((product) => {
          return <MyProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="pages">
        {currentPage > 0 && <span onClick={handlePrev}>Prev</span>}

        {[...Array(noOfPages).keys()].map((pageNo) => (
          <span
            className={`each-page-no ${
              currentPage === pageNo ? "page-no-selected" : " "
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

export default MyPagination;
