import React, { useState } from "react";
import { Container, Card, Table } from "react-bootstrap";
import "./ListProduct.css";
import cross_icon from "../../Assets/cross_icon.png";

export const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  return (
    <Container>
      <div className="list_product">
        <h1>All Products List</h1>
        <Card>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Title</th>
                  <th>Old Price</th>
                  <th>New Price</th>
                  <th>Category</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {allproducts.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={product.image}
                        alt=""
                        className="listproduct_format_product_icon"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.old_price}</td>
                    <td>${product.new_price}</td>
                    <td>{product.category}</td>
                    <td>
                      <img
                        className="listproduct_remove_icon"
                        src={cross_icon}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ListProduct;
