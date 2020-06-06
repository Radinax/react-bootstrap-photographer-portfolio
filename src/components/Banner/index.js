import React from "react";
import { bannerText } from "../../utils/text";

const Banner = () => {
  const { initial_1, initial_2, initial_3, content } = bannerText;

  const title = (
    <h1 className="display-4 banner-heading">
      {initial_1}
      <span className="text-uppercase">{initial_2}</span>
      <span className="display-3">{initial_3}</span>
    </h1>
  );

  const banner = <p className="lead banner-par">{content}</p>;

  return (
    <div className="text-light text-md-right text-center banner" id="Home">
      {title}
      {banner}
    </div>
  );
};

export default Banner;
