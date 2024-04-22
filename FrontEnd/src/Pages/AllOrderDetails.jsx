import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Components/AllOrderDesign.css';

export const AllOrderDetails = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [orders, setOrders] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3003/api/v1/orders/all");
                setOrders(response.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        }

        fetchData();
    }, []);

    const onDeleteOrder = async (orderId) => {
        try {
            await axios.delete(`http://localhost:3003/api/v1/orders/${orderId}`);
            setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };

    const onBtn_logoutButtonClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onBtn_backButtonClick = useCallback(() => {
        navigate("/AllProductDetails");
    }, [navigate]);

    return (
        <div className="Classp1">
            <div className="navigation-bar">
        <div className="logo"></div>
        <h1 className="title">All Ordered Details</h1>
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
          <button className="Btn" onClick={onBtn_logoutButtonClick}>Log Out</button>
          <button className="Btn" onClick={onBtn_backButtonClick}>Back</button>
        </div>
      </div>
            <div className="Class_pro">
                <table className="product-table">
                    <thead>
                        <tr className="Text2w">
                            <th >CustomerName</th>
                            <th >Product_Type</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Total_Price</th>
                            <th>Order_Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr className="Text3c" key={index}>
                                <td>{order.CustomerName}</td>
                                <td>{order.Product_Type}</td>
                                <td>{order.Quantity}</td>
                                <td>{order.Date}</td>
                                <td>{order.Total_Price}</td>
                                <td>{order.Order_Status}</td>
                                <td>
                                    <button className="BtnD" onClick={() => onDeleteOrder(order._id)}></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
    );
};
