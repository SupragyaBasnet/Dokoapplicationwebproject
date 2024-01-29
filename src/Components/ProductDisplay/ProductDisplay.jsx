import React, { useContext } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <Container className="productdisplay w-100 ">
      <Row>
        <Col className="productdisplay-left w-100">
          <div className="productdisplay-img">
            <Image
              className="productdisplay-main-img"
              src={product.image}
              alt=""
            />
          </div>
        </Col>
        <Col className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <Image src={start_icon} alt="" />
            <Image src={start_icon} alt="" />
            <Image src={start_icon} alt="" />
            <Image src={start_icon} alt="" />
            <Image src={start_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
          </div>

          <div className="product-display-right-discription">
            {product.description}
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <Button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </Button>
          <p className="productsiaplay-right-category">
            <span>Category:</span>Women, T-shirt, Crop Top
          </p>
          <p className="productsiaplay-right-category">
            <span>Tags:</span>Modern, Latest
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDisplay;
