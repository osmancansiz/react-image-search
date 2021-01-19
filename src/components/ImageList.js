import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return(
        <a className="card" href={image.webformatURL} key={image.id} target="_blank" rel="noreferrer">
            <div className="image">
                <img src={image.webformatURL} alt={image.tags} className="ui medium bordered image" />
            </div>
            <div className="extra content">
                <i className="hashtag icon"></i>
                {image.tags}
            </div>
        </a>
    ) 
  });

  return (
    <div className="ui four cards">
        {images}
    </div>
  );
};

export default ImageList;
