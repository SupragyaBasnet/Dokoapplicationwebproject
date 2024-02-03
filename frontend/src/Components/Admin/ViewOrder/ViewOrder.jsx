import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";
import "./ViewOrder.css"; // Make sure to include your CSS file

const ViewOrder = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      product: "Product 1",
      quantity: 2,
      price: 20,
    },
    {
      id: 2,
      product: "Product 2",
      quantity: 1,
      price: 15,
    },
    // Add more orders as needed
  ]);

  const calculateTotal = () => {
    return orders.reduce(
      (total, order) => total + order.quantity * order.price,
      0
    );
  };

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
