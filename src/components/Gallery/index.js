import React from "react";
import { galleryText } from "../../utils/text";

const Gallery = () => {
  const { main, images } = galleryText;

  const title = (
    <div class="row text-muted text-center">
      <div class="col m-4">
        <h1 class="display-4 mb-4">{main.title}</h1>
        <div class="underline-dark mb-4"></div>
        <p class="lead">{main.content}</p>
      </div>
    </div>
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
    <section className="py-5" id="Gallery">
      <div className="container-fluid">
        {title}
        {gallery}
      </div>
    </section>
  );
};

export default Gallery;
