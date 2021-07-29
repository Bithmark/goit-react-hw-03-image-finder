import { useState } from "react";
import Loader from "../Loader/Loader";
import css from "./ImageGalleryItem.module.css"

function ImageGalleryItem({ url, alt, modalUrl, showModal }) {
  const [load, setLoad] = useState(true);

  return (
    <li
      onClick={() => showModal(modalUrl)}
      className="ImageGalleryItem"
    >
      <img
        onLoad={() => setLoad(false)}
        src={url}
        alt={alt}
        className="ImageGalleryItem-image"
      />
      {load && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
    </li>
  );
}

export default ImageGalleryItem;
