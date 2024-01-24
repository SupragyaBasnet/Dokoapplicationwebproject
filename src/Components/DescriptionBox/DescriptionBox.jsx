import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is a digital platform that facilitates the
          buying and selling of goods or services over the internet. These
          websites have become integral to modern retail, providing businesses
          with a way to reach a global audience and customers with the
          convenience of shopping from the comfort of their homes.
        </p>
        <p>
          E-commerce websites showcase products or services with detailed
          descriptions, high-quality images, and sometimes videos. This helps
          customers make informed purchase decisions.Users can add items to a
          virtual shopping cart and proceed to checkout, where they provide
          shipping details and payment information. Secure and user-friendly
          checkout processes are crucial for a positive customer experience.
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
