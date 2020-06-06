import React, { useState } from "react";
import { customerText } from "../../utils/text";

const Customers = () => {
  const [order, setOrder] = useState("0");
  const { main, indicator, users } = customerText;

  const title = (
    <div className="row text-white text-center">
      <div className="col m-4">
        <h1 className="display-4 mb-4">{main.title}</h1>
        <div className="underline mb-4"></div>
        <p className="lead">{main.content}</p>
      </div>
    </div>
  );

  // TODO: active needs to be controlled
  const pagination = (
    <ol className="carousel-indicators">
      {indicator.map((num) => (
        <li
          key={num}
          data-target="#customer-carousel"
          data-slide-to={num}
          onClick={() => setOrder(num)}
        ></li>
      ))}
    </ol>
  );

  // TODO: USERS OVERLAPING, CONTROL WITH STATE
  const userInformation = (
    <div className="carousel-inner">
      {users
        .filter((user, index) => order === index.toString())
        .map((user) => (
          <div className="carousel-item active text-center">
            <img
              src={user.image}
              className="img-fluid rounded-circle m-5"
              alt="users"
              width="150"
            />
            <blockquote className="blockquote text-white">
              <p className="mb-5">{user.description}</p>
            </blockquote>
            <h5 className="text-light text-uppercase font-weight-bold mb-3">
              {user.name}
            </h5>
            <ul className="list-inline mb-5">
              {[...Array(user.stars)].map((star, index) => (
                <li key={index} className="list-inline-item">
                  <i className="fa fa-star text-warning"></i>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );

  return (
    <section className="p-5 customers" id="Customers">
      <div className="container-fluid">
        {title}
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div
              className="carousel-slide"
              data-ride="carousel"
              id="customer-carousel"
            >
              {pagination}
              {userInformation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
