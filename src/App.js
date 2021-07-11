import { useEffect, useState } from "react";

import { AddNewPhotoButton } from "./components/AddNewPhotoButton";
import { NewPhotoInput } from "./components/NewPhotoInput";
import { Photo } from "./components/Photo";

function App() {
  const [photoUrl, setPhotoUrl] = useState("");
  const [photos, setPhotos] = useState([]);
  const [actualPhotoUrl, setActualPhotoUrl] = useState("");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const addNewPhoto = () => {
    if (photos.includes(photoUrl)) return;
    if (photoUrl === "") return;
    setPhotos((photos) => [...photos, photoUrl]);
    setPhotoUrl("");
  };

  const handlePhotoUrlInput = (e) => {
    setPhotoUrl(e.target.value);
  };

  const renderPhotos = () => {
    return photos.map((photo, index) => (
      <Photo
        bgImg={photo}
        key={index}
        setBgImgForActualImg={setActualPhotoUrl}
        deletePhoto={() => {
          deletePhoto(index);
        }}
      ></Photo>
    ));
  };

  const getPreviousPhotoUrl = () => {
    if (currentPhotoIndex === 0) return photos[photos.length - 1];
    return photos[currentPhotoIndex - 1];
  };
  const getNextPhotoUrl = () => {
    if (currentPhotoIndex === photos.length - 1) return photos[0];
    return photos[currentPhotoIndex + 1];
  };

  const deletePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => index !== i);
    setPhotos(newPhotos);

    setActualPhotoUrl(newPhotos[0]);
  };

  useEffect(() => {
    setCurrentPhotoIndex(photos.indexOf(actualPhotoUrl));
  }, [actualPhotoUrl]);

  useEffect(() => {
    setPhotoUrl("");
  }, [photos]);

  return (
    <div className="App">
      <div className="photos">
        <Photo
          bgImg={getPreviousPhotoUrl()}
          setBgImgForActualImg={setActualPhotoUrl}
        ></Photo>
        <Photo bgImg={actualPhotoUrl} setBgImgForActualImg={() => {}}></Photo>
        <Photo
          bgImg={getNextPhotoUrl()}
          setBgImgForActualImg={setActualPhotoUrl}
        ></Photo>
      </div>
      <div className="gallery">{renderPhotos()}</div>
      <div className="add-photo-box">
        <NewPhotoInput
          onChange={handlePhotoUrlInput}
          photoUrl={photoUrl}
        ></NewPhotoInput>
        <AddNewPhotoButton onClick={addNewPhoto}></AddNewPhotoButton>
      </div>
    </div>
  );
}

export default App;
