import React from 'react';
import PropTypes from 'prop-types';
export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        className="TaskEditor-input"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.elementType.isRequired,
};
