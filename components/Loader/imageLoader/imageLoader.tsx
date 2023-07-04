import React from 'react';
import './styles.css';

const ImageLoader = () => {
  return (
    <svg className="LoaderSvg" viewBox="25 25 50 50">
      <circle className="LoaderCircle" r="20" cy="50" cx="50"></circle>
    </svg>
  );
}

export default ImageLoader;
