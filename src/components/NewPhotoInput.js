import React from "react";

export const NewPhotoInput = ({ photoUrl, onChange }) => {
  return <input type="text" onChange={onChange} value={photoUrl}></input>;
};
