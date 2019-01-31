import React from "react";
import "./Imageard.css";

const ImageCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectImage(props.picture)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.picture} src={props.image} />
            </a>
        </div>
    </div>
);

export default ImageCard;
