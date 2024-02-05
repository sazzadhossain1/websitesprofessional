import React from "react";
import "./FooterService.css";
import footerWebDevelopmentPhoto from "../../accts/footerServicePhoto/footerWebdevelopmentPhoto.png";
import footerSeoPhoto from "../../accts/footerServicePhoto/footerSeoPhoto.png";
import footerOnlineManagementPhoto from "../../accts/footerServicePhoto/footerOnlineManagement.png";

const FooterService = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  return (
    <div>
      <h1 className="footer_service_heading">Services</h1>
      <div className="footer_service_grid_div">
        <div className="footer_service_cart_div">
          <img src={footerWebDevelopmentPhoto} alt="" />
          <div>
            <p>WEBSITE DEVELOPMENT, CREATION, AND MANAGEMENT</p>
          </div>
        </div>
        <div className="footer_service_cart_div">
          <img src={footerSeoPhoto} alt="" />
          <div>
            <p>SEO - SEARCH ENGINE OPTIMIZATION</p>
          </div>
        </div>
        <div className="footer_service_cart_div">
          <img src={footerOnlineManagementPhoto} alt="" />
          <div>
            <p>ONLINE MARKETING MANAGEMENT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterService;
