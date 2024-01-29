import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

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
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr key={e.id}>
                  <td></td>
                  <td>
                    {" "}
                    <Image
                      src={e.image}
                      alt=""
                      className="custom-carticon-product-icon"
                    />
                  </td>
                  <td>
                    <p>{e.name}</p>
                  </td>
                  <td>
                    <p>${e.new_price}</p>
                  </td>
                  <td>
                    <Button
                      variant="outline-dark"
                      className="custom-cartitems-quantity"
                    >
                      {cartItems[e.id]}
                    </Button>
                  </td>
                  <td>
                    <p>${e.new_price * cartItems[e.id]}</p>
                  </td>
                  <td>
                    <img
                      className="custom-cartitems-remove-icon"
                      src={remove_icon}
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                      alt=""
                    />
                  </td>
                </tr>
              );
            }
            return null;
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
            <td>Free</td>
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
              <h3>${getTotalCartAmount()}</h3>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <Row className="justify-content-end">
        <Col lg={4}>
          <div className="custom-cartitems-total">
            <Button variant="primary">PROCEED TO CHECKOUT</Button>
          </div>
          <div className="custom-cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="custom-cartitems-promobox">
              <input
                type="text"
                placeholder="promo code"
                className="custom-cartitems-promo-input"
              />
              <Button
                variant="secondary"
                className="custom-cartitems-promo-button"
              >
                Submit
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItems;
