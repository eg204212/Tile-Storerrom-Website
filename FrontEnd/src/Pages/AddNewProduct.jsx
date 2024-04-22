import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Components/AddProDesign.css';

export const AddNewProduct = () => {
  const [Product_Type, setProduct_Type] = useState('');
  const [Product_Description, setProduct_Description] = useState('');
  const [Brand, setBrand] = useState('');
  const [Unit_Price, setUnit_Price] = useState('');
  const [image, setimage] = useState(null); // Initialize with null, not 'null'
  console.log(image, 12)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("Product_Type", Product_Type);
    formData.append("Product_Description", Product_Description);
    formData.append("Brand", Brand);
    formData.append("Unit_Price", Unit_Price);
    formData.append("image", image); // Append image file to FormData
  
    try {
      await axios.post("http://localhost:3003/api/v1/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Product created successfully");
      navigate("/AllProductDetails");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="Classa_1">
      <div>
        <form className="Text1"></form>
      </div>

      <div className="content_001">

        <div className="Class2ppp_1">
          <form onSubmit={handleSubmit}>
            <span className="Text3a1">Add New Products</span>
            <div>
              <span className="Text_reg">Product Type</span>
              <input className="Box1_p"
                value={Product_Type}
                onChange={(e) => setProduct_Type(e.target.value)}
                type="text" placeholder="Tiles or Bathware Items"
                id="Product_Type" name="Product_Type" />
            </div>

            <div>
              <span className="Text_reg">Product Description</span>
              <input className="Box2_p"
                value={Product_Description}
                onChange={(e) => setProduct_Description(e.target.value)}
                type="text" placeholder="Size + Color"
                id="Product_Description"
                name="Product_Description" />
            </div>

            <div>
              <span className="Text_reg">Brand</span>
              <input className="Box3_p"
                value={Brand}
                onChange={(e) => setBrand(e.target.value)}
                type="text" placeholder="Brand" id="Brand"
                name="Brand" />
            </div>

            <div>
              <span className="Text_reg">Unit_Price</span>
              <input className="Box4"
                value={Unit_Price}
                onChange={(e) => setUnit_Price(e.target.value)}
                type="text" placeholder="Unit_Price"
                id="Unit_Price" name="Unit_Price" />
            </div>

            <div>
              <input onChange={(e) => setimage(e.target.files[0])} type="file" accept="image/*" />
            </div>

            <div>
              <button className="Btn_regp" type="submit">Save</button>
            </div>

          </form>
        </div>

        <div className="class2pp_2">
          <form></form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
