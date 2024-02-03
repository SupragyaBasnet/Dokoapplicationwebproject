import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import upload_area from "../../Assets/upload_area.svg";
import "./AddProduct.css";

export const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const nameChangeHandler = (e) => {
    setProductDetails({ ...productDetails, name: e.target.value });
  };

  const priceChangeHandler = (e, type) => {
    const value = e.target.value;
    setProductDetails({
      ...productDetails,
      [type]: /^\d*\.?\d+$/.test(value) ? parseFloat(value) : "",
    });
  };

  const categoryChangeHandler = (e) => {
    setProductDetails({ ...productDetails, category: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    // Add your logic to send data to the server or perform other actions here
  };

  return (
    <Container>
      <Form className="add_product">
        <Row className="addproduct_itemfield">
          <Form.Group as={Col} controlId="formProductName">
            <Form.Label>Product title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type here"
              value={productDetails.name}
              onChange={nameChangeHandler}
            />
          </Form.Group>
        </Row>
        <Row className="addproduct_price">
          <Form.Group as={Col} controlId="formOldPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type"
              value={productDetails.old_price}
              onChange={(e) => priceChangeHandler(e, "old_price")}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formNewPrice">
            <Form.Label>Offer Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type"
              value={productDetails.new_price}
              onChange={(e) => priceChangeHandler(e, "new_price")}
            />
          </Form.Group>
        </Row>
        <Row className="addproduct_itemfield">
          <Form.Group as={Col} controlId="formProductCategory">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              as="select"
              value={productDetails.category}
              onChange={categoryChangeHandler}
            >
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row className="addproduct_itemfield">
          <Form.Group as={Col} controlId="formFileInput">
            <label htmlFor="file_input">
              <img
                src={image ? URL.createObjectURL(image) : upload_area}
                className="addproduct_thumbnail_img"
                alt=""
              />
            </label>
            <Form.Control
              type="file"
              name="image"
              id="file_input"
              onChange={imageHandler}
              hidden
            />
          </Form.Group>
        </Row>
        <Row className="addproduct_itemfield">
          <Button
            variant="primary"
            onClick={() => {
              Add_Product();
            }}
            className="addproduct_btn"
          >
            ADD
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default AddProduct;
