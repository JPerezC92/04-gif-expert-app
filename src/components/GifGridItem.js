import React from "react";
import PropTypes from "prop-types";
import "./GifGridItem.css";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="gif__item animate__animated animate__fadeIn animate__slow">
      <img className="gif__image" src={url} alt={title} />
      <h3 className="gif__title">{title}</h3>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
