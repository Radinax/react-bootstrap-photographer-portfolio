import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { missionText } from "../../utils/text";
import Camera from "../../assets/images/camera.png";

const Mission = () => {
  const { main, secondary, objective } = missionText;
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainMission = (
    <div className="col m-4">
      <h1 className="display-4 mb-4">{main.title}</h1>
      <div className="underline mb-4"></div>
      <p className="lead">{main.content}</p>
    </div>
  );

  const secondaryMissions = secondary.map((item) => (
    <div className="col-md-4 text-center" key={item.title}>
      <i className={item.class}></i>
      <h1 className="text-white mb-3">{item.title}</h1>
      <p className="text-muted">{item.content}</p>
    </div>
  ));

  const objectiveMission = (
    <div className="row align-items-center">
      <div className="col-lg-5 text-center">
        <img
          alt="image1"
          src={Camera}
          width="350"
          className={classnames("img-fluid camera-img", {
            fromLeft: scrollPosition >= 650,
          })}
        />
      </div>
      <div
        className={classnames(
          "col-lg-7 text-white text-lg-right text-center mission-text",
          {
            fromRight: scrollPosition >= 650,
          }
        )}
      >
        <h1>{objective.title}</h1>
        <p className="lead">{objective.content}</p>
      </div>
    </div>
  );

  return (
    <section className="p-5 mission" id="Mission">
      <div className="container-fluid">
        <div className="row text-white text-center">{mainMission}</div>
        <div className="row my-5">{secondaryMissions}</div>
        <div className="container">{objectiveMission}</div>
      </div>
    </section>
  );
};

export default Mission;
