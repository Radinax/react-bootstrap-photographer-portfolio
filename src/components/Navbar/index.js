import React from "react";
import classnames from "classnames";
import { navbarText } from "../../utils/text";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const { title_1, title_2, navItems } = navbarText;

  const logo = (
    <a href="asas" className="navbar-brand text-light text-uppercase">
      <span className="h2 font-weight-bold">{title_1}</span>
      <span className="h1">{title_2}</span>
    </a>
  );

  const toggler = (
    <button
      className="navbar-toggler nav-button"
      type="button"
      data-toggle="collapse"
      data-target="#myNavbar"
    >
      <div className="bg-light line1"></div>
      <div className="bg-light line2"></div>
      <div className="bg-light line3"></div>
    </button>
  );

  // TODO HANDLE ACTVE BETTER
  const navList = (
    <div
      className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold"
      id="myNavbar"
    >
      <ul className="navbar-nav">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <a
              href={`#${item}`}
              className={classnames("nav-link m-2 menu-item", {
                "nav-active": false,
              })}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg fixed-top nav-menu">
      {logo}
      {toggler}
      {navList}
    </nav>
  );
};

export default Navbar;
