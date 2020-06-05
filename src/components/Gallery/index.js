import React from "react";
import { galleryText } from "../../utils/text";

const Gallery = () => {
  const { main, list, images } = galleryText;

  const title = (
    <div class="row text-muted text-center">
      <div class="col m-4">
        <h1 class="display-4 mb-4">{main.title}</h1>
        <div class="underline-dark mb-4"></div>
        <p class="lead">{main.content}</p>
      </div>
    </div>
  );

  const inlineList = (
    <ul className="list-inline text-center text-uppercase font-weight-bold my-4">
      {list.map((item, index) => (
        <li
          key={index}
          class="list-inline-item gallery-list-item active-item"
          data-filter="all"
        >
          {item}
          <span class="mx-md-5 mx-3 text-muted">/</span>
        </li>
      ))}
    </ul>
  );

  const gallery = (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center">
        {images.map((image, index) => (
          <div key={index} class="filter new">
            <img src={image} alt="gallery" width="300" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-5">
      <div className="container-fluid">
        {title}
        {inlineList}
        {gallery}
      </div>
    </section>
  );
};

export default Gallery;
