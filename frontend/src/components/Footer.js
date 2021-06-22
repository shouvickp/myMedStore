import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Row className="border-bottom border-white justify-content-center">
        <Col className="col-4 col-sm-2">
          <h5>Company</h5>
          <ul className="list-unstyled text-white">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/aboutus">About MEDIIons</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </Col>
        <Col className="col-7 col-sm-5">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope fa-lg"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </Col>
        <Col className="col-12 col-sm-4 align-self-center">
          <div className="text-center">
            Helloo kkklkkkkkkkkkkk
            <div className="social-icon" href="http://google.com/+">
              <i className="fa fa-google-plus text-white"></i>
            </div>
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/profile.php?id="
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-social-icon btn-linkedin"
              href="http://www.linkedin.com/in/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube"></i>
            </a>
            <a className="btn btn-social-icon" href="mailto:">
              <i className="fa fa-envelope-o"></i>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center py-1">Copyright &copy; MEDIIons</Col>
      </Row>
    </footer>
  );
};
export default Footer;
