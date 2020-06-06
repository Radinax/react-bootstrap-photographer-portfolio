import React, { useState } from "react";
import { footerText } from "../../utils/text";

const Footer = () => {
  const [email, setEmail] = useState("");
  const {
    main,
    visit,
    links,
    help,
    services,
    connected,
    copyright,
  } = footerText;

  const about = (
    <div className="col-lg-4 col-sm-6">
      <h5 className="pb-3">{main.title}</h5>
      <p className="small">{main.content}</p>
    </div>
  );

  const visitLinks = (
    <div className="col-lg-2 col-sm-6">
      <h5 className="pb-3">{visit}</h5>
      <ul className="list-unstyled">
        {links.map((link) => (
          <li key={link}>
            <a href="sasad" className="footer-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const helpSection = (
    <div className="col-lg-2 col-sm-6">
      <h5 className="pb-3">{help}</h5>
      <ul className="list-unstyled">
        {services.map((serv) => (
          <li key={serv}>
            <a href="asad" className="footer-link text-uppercase">
              {serv}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const connectedSection = (
    <div className="col-lg-4 col-sm-6">
      <h5 className="pb-3">{connected.title}</h5>
      <p className="small">{connected.content}</p>
      <form className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn bg-danger text-white text-uppercase font-weight-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <ul className="list-inline">
        <li className="list-inline-item">
          <i className="fab fa-facebook-square fa-2x text-primary"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-google-plus fa-2x text-danger"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-instagram fa-2x text-danger"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-twitter fa-2x text-info"></i>
        </li>
        <li className="list-inline-item">
          <i className="fab fa-youtube fa-2x text-danger"></i>
        </li>
      </ul>
    </div>
  );

  const copyrightSection = (
    <div className="row">
      <div className="col text-center text-light border-top pt-3">
        <p>&copy; {copyright}</p>
      </div>
    </div>
  );

  return (
    <footer className="bg-dark px-5">
      <div className="container-fluid">
        <div className="row text-light py-4">
          {about}
          {visitLinks}
          {helpSection}
          {connectedSection}
        </div>
        {copyrightSection}
      </div>
    </footer>
  );
};

export default Footer;
