import React from "react";
import "./image.css";

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img className="imagesInside" key={image.id} src={image.webformatURL} alt="image" />
    })
    return (
        <div className="images">
            {images}
        </div>
    )

}
export default ImageList;