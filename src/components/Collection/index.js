import React from "react";
import { collectionText } from "../../utils/text";

const Collection = () => {
  const { main, collection } = collectionText;

  const introduction = (
    <div class="row text-white text-center">
      <div class="col m-4">
        <h1 class="display-4 mb-4">{main.title}</h1>
        <div class="underline mb-4"></div>
        <p class="lead">{main.content}</p>
      </div>
    </div>
  );

  const collections = (
    <div className="row">
      {collection.map((item) => (
        <div key={item.title} class="col-lg-4 col-sm-6 my-5">
          <div class="card border-0 card-shadow">
            <img alt={item.title} src={item.image} class="card-img" />
            <div class="card-img-overlay">
              <h5 class="text-white text-uppercase font-weight-bold p-2 heading">
                {item.title}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-secondary py-4">
      <div className="container-fluid">
        {introduction}
        {collections}
      </div>
    </section>
  );
};

export default Collection;
