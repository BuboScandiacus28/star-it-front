import React from 'react';
import { PropTypes } from 'prop-types';

const BusinessItem = ({
  id, name, path,
}) => (
  <div id={`business${id}`} align="center">
    <p>{name}</p>
    <img src={path} alt="Описание...." />
  </div>
);

BusinessItem.defaultProps = {
  id: 0,
  name: '',
  path: '',
};

BusinessItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  path: PropTypes.string,
};

export default BusinessItem;
