import React from 'react';
import ReactDOM from 'react-dom';
import CvBuilder from '../cv_builder/cv-builder/page';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CvBuilder />,
    document.body.appendChild(document.createElement('div')),
  );
});
