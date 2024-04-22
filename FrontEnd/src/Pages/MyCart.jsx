import React, { useState, useEffect } from "react";
import '../Components/AllProDesign.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const MyCart = () => {
  const [Search_here, setSearch_here] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3003/api/v1/products/all");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const navigate = useNavigate();

  const onBtn_office1ButtonClick = useCallback(() => {
    navigate("/AddNewProduct");
  }, [navigate]);

  const onBtn_orderButtonClick = useCallback(() => {
    navigate("/AddNewOrder");
  }, [navigate]);
  
  const onBtn_logoutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  

  const defaultProductDetails = {
    Product_Type: "Default Product Type",
    Product_Description: "Default Product Description",
    Brand: "Default Brand",
    Unit_Price: "Default Price",
    image: "default_image_url.jpg"
  };

  const handleProductClick = (productId) => {
    navigate(`/ProductDetails?productId=${productId}`);
  };

  return (
    <div className="Classp1">
      <div className="navigation-bar">
        <div className="logo"></div>
        <h1 className="title">MY CART</h1>
        <div className="buttons">
          <div>
            <form className="container_c">
              
              <input className="Box_search" value={Search_here} onChange={(e) => setSearch_here(e.target.value)}
               type="text" placeholder="Search_here" id="Search_here" name="Search_here" />
              </form>
          </div>
          
          <button className="Btn" onClick={onBtn_logoutButtonClick}>Log Out</button>
        </div>
      </div>
      
       
      <div className="office">
        <div className="ButtonContainer"></div>
      </div>
    </div>
  );
};
