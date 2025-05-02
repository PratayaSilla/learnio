import React from "react";

export default function Card({info}) {
  return (
    <div className="yt-card">
      <img src={info.img} alt="" className="card-jpg" />
      <div className="card-text-area">
        <h1 className="best-handpicked-vdos">{info.heading}</h1>
        <p className="desc-para">
          {info.desc}
        </p>
      </div>
    </div>
  );
}
