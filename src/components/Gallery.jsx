import ImageGallery from "react-image-gallery";
import "./gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";

export const Gallery = ({ categoria }) => {
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [indexIMG, setIndexIMG] = useState(0);

  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const response = await fetch(`/data/allImages.json`);
        const data = await response.json();
        const filteredImg = data.filter((img) => img.category === categoria);
        setImages(filteredImg);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImgs();
  }, []);

  const handleSetvisible = (index) => {
    setIndexIMG(index);
    setIsVisible(true);
  };

  const handelCloseOnKeyPress = (e) => {
    if (e.key === "Escape") {
      setIsVisible(false);
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handelCloseOnKeyPress}
      className="galleryContainer"
    >
      {isVisible && (
        <div className="wraper">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showBullets={true}
            showThumbnails={true}
            showNav={true}
            startIndex={indexIMG}
          />
        </div>
      )}
      <div className="display-image-gallery">
        {images.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image.original}
            alt={`Image ${index}`}
            onClick={() => handleSetvisible(index)}
            effect="blur"
          />
        ))}
      </div>
    </div>
  );
};
