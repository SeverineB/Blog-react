import React from 'react';
import PropTypes from 'prop-types';

import usePageTitle from 'src/hooks/usePageTitle';

const Preferences = ({ darkValue, changeDarkValue }) => {

  usePageTitle('Préférences');

  return (
    <div>
      <label htmlFor="darkTheme">
        <input
          onChange={() => {
            changeDarkValue(!darkValue);
          }}
          checked={darkValue}
          id="darkTheme"
          type="checkbox"
        /> Dark theme
      </label>
    </div>
  );
};

Preferences.propTypes = {
  darkValue: PropTypes.bool.isRequired,
  changeDarkValue: PropTypes.func.isRequired,
};

export default Preferences;
