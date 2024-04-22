import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Components/EditProDesign.css';

const EditProducts = () => {
  const [Product_Type, setProduct_Type] = useState('');
  const [Product_Description, setProduct_Description] = useState('');
  const [Brand, setBrand] = useState('');
  const [Unit_Price, setUnit_Price] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('productId');
  
  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await axios.get(`http://localhost:3003/api/v1/products/${productId}`);
        const productData = response.data;

        setProduct_Type(productData.Product_Type);
        setProduct_Description(productData.Product_Description);
        setBrand(productData.Brand);
        setUnit_Price(productData.Unit_Price);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductData();
  }, [productId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedProductData = {
      Product_Type: Product_Type,
      Product_Description: Product_Description,
      Brand: Brand,
      Unit_Price: Unit_Price,
    };
    
    try {
      const response = await axios.put(
        `http://localhost:3003/api/v1/products/${productId}`,
        updatedProductData
      );

      console.log('Product updated:', response.data);
      
      navigate('/AllProductDetails');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Edit Products</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Product Type:</label>
            <input
              className="form-control"
              type="text"
              value={Product_Type}
              onChange={(e) => setProduct_Type(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Product Description:</label>
            <input
              className="form-control"
              type="text"
              value={Product_Description}
              onChange={(e) => setProduct_Description(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Brand:</label>
            <input
              className="form-control"
              type="text"
              value={Brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Unit Price:</label>
            <input
              className="form-control"
              type="text"
              value={Unit_Price}
              onChange={(e) => setUnit_Price(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
