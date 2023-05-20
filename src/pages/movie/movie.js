import React from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
import { data } from "../../store/data";

const Movie = () => {
  const { id } = useParams();
  return (
    <div className="wraper">
      <h1 className="title">{data[id - 1].name}</h1>
      <p className="descripiton">{data[id - 1].description}</p>
      <iframe
        width="560"
        height="315"
        src={data[id - 1].trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Movie;
