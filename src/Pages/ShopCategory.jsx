import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext"; // Import ShopContext

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <Container fluid className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <Row className="shopcategory-indexSort">
        <Col>
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
        </Col>
        <Col className="text-end">
          Sort by <img src={dropdown_icon} alt="" />
        </Col>
      </Row>
      <Row className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Col key={i} xs={12} sm={12} md={12} lg={12}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </Col>
            );
          } else {
            return null;
          }
        })}
      </Row>
      <div className="shopcategory-loadmore">Explore More</div>
    </Container>
  );
};

export default ShopCategory;
