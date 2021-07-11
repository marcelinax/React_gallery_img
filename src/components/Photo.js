import React from "react";

export const Photo = ({ bgImg, setBgImgForActualImg, deletePhoto }) => {
  return (
    <div className="photo">
      <div
        className="photo-bg"
        style={{ backgroundImage: `url(${bgImg})` }}
        onClick={() => setBgImgForActualImg(bgImg)}
      ></div>
      <button onClick={deletePhoto}>
        <i class="bx bx-trash"></i>
      </button>
    </div>
  );
};
