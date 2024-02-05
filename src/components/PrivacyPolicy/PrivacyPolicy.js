import React from "react";
import "./PrivacyPolicy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy_flex_div">
      <div>
        <h1>Privacy Policy</h1>
        <p>Effective Date: March 1, 2023</p>
      </div>
      <div className="PrivacyPolicy_text_div">
        <p>
          We at Website Professionals respect your privacy and are committed to
          protecting your personal information. This privacy policy explains how
          we collect, use, and disclose personal information about you when you
          use our website (http://websitesprofessional.com/) and our services.
        </p>

        <p>Information We Collect</p>
        <p>
          We may collect personal information about you when you visit our
          website, use our services, or communicate with us. The personal
          information we collect may include your name, email address, phone
          number, and other information you provide to us.
        </p>

        <p>How We Use Your Information</p>
        <p>
          We use your personal information to provide our services to you,
          communicate with you, and improve our services. We may also use your
          personal information for other purposes that are compatible with the
          original purpose of collection or for which you have given your
          consent.
        </p>

        <p>Disclosure of Your Information</p>
        <p>
          We may disclose your personal information to third-party service
          providers who assist us in providing our services to you. We may also
          disclose your personal information to comply with legal obligations or
          protect our rights, property, or safety.
        </p>
        <p>Security</p>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no data transmission
          over the internet or electronic storage is completely secure.
        </p>

        <p>Changes to Our Privacy Policy</p>
        <p>
          We may update this privacy policy from time to time. If we make
          material changes, we will notify you by email (if you have provided us
          with your email address) or by posting a notice on our website.
        </p>
        <p>Contact Us</p>
        <p>
          If you have any questions or concerns about our privacy policy or our
          handling of your personal information, please contact us:
        </p>
        <div className="privacy_policy_icon_div">
          <p>
            <FontAwesomeIcon icon={faPhone} />
          </p>
          <p>Phone: 704-891-4329</p>
        </div>
        <div className="privacy_policy_icon_div">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
          </p>
          <p>Email: info@websitesprofessional.com</p>
        </div>
        <div className="privacy_policy_icon_div">
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
          </p>
          <p>Address: 123 Main St, Anytown USA 12345</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
