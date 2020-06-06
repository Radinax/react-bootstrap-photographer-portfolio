import React from "react";
import { pricingText } from "../../utils/text";

const Pricing = () => {
  const { main, prices, gratitude, signup } = pricingText;

  const title = (
    <div className="row text-muted text-center">
      <div className="col m-4">
        <h1 className="display-4 mb-4">{main.title}</h1>
        <div className="underline-dark mb-4"></div>
        <p className="lead">{main.content}</p>
      </div>
    </div>
  );

  const services = (
    <div className="row align-items-center">
      {prices.map((price) => (
        <div key={price.title} className="card card-1 py-4 my-4 mx-auto">
          <div className="card-body">
            <h5 className="text-uppercase font-weight-bold mb-5">
              {price.title}
            </h5>
            <h1 className="display-4">
              <i className="fas fa-dollar-sign" /> {price.value}
            </h1>
            <ul className="list-unstyled">
              {price.list.map((item) => (
                <li key={item} className="font-weight-bold py-3 card-list-item">
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn p-2 text-uppercase font-weight-bold price-card-button text-light">
              {signup}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const ending = (
    <div className="my-5">
      <h2 className="text-muted mb-4">{gratitude}</h2>
      <i className="fas fa-coffee fa-3x"></i>
    </div>
  );

  return (
    <section className="bg-light text-center p-5" id="Pricing">
      <div className="container-fluid">
        {title}
        {services}
        {ending}
      </div>
    </section>
  );
};

export default Pricing;
