import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import cross_icon from "../Assets/cross_icon.png";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { getTotalCartAmount, cartItems, removeFromCart } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const shippingFee = 5; // Set your shipping fee here

  const subtotal = getTotalCartAmount();
  const total = subtotal + shippingFee;
  let index = 1;

  const proceedToCheckout = () => {
    navigate("/checkout");
  };

  console.log(cartItems);
  return (
    <Container className="py-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cartItems).map((key) => {
            const item = cartItems[key]["product"];
            const count = cartItems[key]["count"];
            console.log(count, item);
            return (
              <tr key={item.id}>
                <td>{index++}</td>
                <td>
                  {" "}
                  <Image
                    src={item.image}
                    alt=""
                    className="custom-carticon-product-icon"
                  />
                </td>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>${item.discounted_price}</p>
                </td>
                <td>
                  <Button
                    variant="outline-dark"
                    className="custom-cartitems-quantity"
                  >
                    {count}
                  </Button>
                </td>
                <td>
                  <p>${item.discounted_price * count}</p>
                </td>
                <td>
                  <img
                    className="custom-cartitems-remove-icon"
                    src={cross_icon}
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>
              <h1>Cart Totals</h1>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <p>Subtotal</p>
            </td>
            <td></td>
            <td></td>
            <td>${getTotalCartAmount()}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Shipping Fee</td>
            <td></td>
            <td></td>
            <td>${shippingFee}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <h3>Total</h3>
            </td>
            <td></td>
            <td></td>
            <td>
              <h3>${total}</h3>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <Row className="justify-content-end">
        <Col lg={4}>
          <div className="custom-cartitems-total">
            <Button variant="primary" onClick={() => proceedToCheckout()}>
              PROCEED TO CHECKOUT
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItems;
