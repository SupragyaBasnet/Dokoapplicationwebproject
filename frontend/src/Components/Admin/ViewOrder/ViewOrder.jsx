import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";
import "./ViewOrder.css"; // Make sure to include your CSS file
import axios from "axios";
import { useEffect } from "react";

const ViewOrder = () => {
  const [orders, setOrders] = useState([]);

  const calculateTotal = () => {
    return orders.reduce(
      (total, order) => total + order.quantity * order.price,
      0
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/items")
      .then((response) => {
        if (response.status == 200 && response.data.httpStatus == "OK") {
          setOrders(response.data.dataArray);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <div className="view_order mt-4">
        <h1>View Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.date}</td>
                <td>${order.price}</td>
                <td>${order.quantity * order.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="total">
          <strong>Total:</strong> ${calculateTotal()}
        </div>
      </div>
    </Container>
  );
};

export default ViewOrder;
