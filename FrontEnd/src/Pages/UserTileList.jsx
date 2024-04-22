import React, { useState, useEffect } from "react";
import '../Components/AllProDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserTileList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3003/api/v1/products/all");
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const onBtn_office1ButtonClick = useCallback(() => {
    navigate("/AddNewProduct");
  }, [navigate]);

  const onBtn_orderButtonClick = useCallback(() => {
    navigate("/AddNewOrder");
  }, [navigate]);

  const onBtn_cartButtonClick = useCallback(() => {
    navigate("/MyCart");
  }, [navigate]);
  
  const onBtn_logoutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSearch = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/v1/products/searchResults?q=${searchQuery}`);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products); // If search query is empty, show all products
    } else {
      handleSearch(); // Otherwise, perform search
    }
  }, [searchQuery, products, handleSearch]);

  const defaultProductDetails = {
    Product_Type: "Default Product Type",
    Product_Description: "Default Product Description",
    Brand: "Default Brand",
    Unit_Price: "Default Price",
    image: "default_image_url.jpg"
  };

  const handleProductClick = () => {
    navigate("/AddNewOrder"); // Navigate to AddNewOrder page when clicking "Order Now"
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="Classp1">
      <div className="navigation-bar">
        <div className="logo"></div>
        <h1 className="title">All Product Details</h1>
        <div className="buttons">
          <div>
            <form className="container_c">
              <input
                className="Box_search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search_here"
                id="Search_here"
                name="Search_here"
              />
            </form>
          </div>
          <button className="Btn" onClick={onBtn_cartButtonClick}>
            Cart ({cart.length})
          </button>
          <button className="Btn" onClick={onBtn_logoutButtonClick}>Log Out</button>
        </div>
      </div>
      <div className="Class_pro">
        <div className="product-container">
          {filteredProducts.map((product, index) => (
            <div className="product-box" key={index} onClick={handleProductClick}>
              <img src={`http://localhost:3003${product.image}`} alt="product" className="product-image" />
              <div className="product-details">
                <p><strong>Product Type:</strong> {product.Product_Type || defaultProductDetails.Product_Type}</p>
                <p><strong>Product Description:</strong> {product.Product_Description || defaultProductDetails.Product_Description}</p>
                <p><strong>Brand:</strong> {product.Brand || defaultProductDetails.Brand}</p>
                <p><strong>Unit Price:</strong> {product.Unit_Price || defaultProductDetails.Unit_Price}</p>
                <div className="buttons-container">
                  <button className="Btn" onClick={onBtn_orderButtonClick}> - ORDER NOW</button>
                  <button className="Btn" onClick={() => addToCart(product)}>
                    <img src="../Components/heart.png" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="office">
        <div className="ButtonContainer"></div>
      </div>
    </div>
  );
};
