import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { useDeviceOrientation } from '../helpers/useDeviceOrientation.js';
export const Device = () => {
  const [checked, setChecked] = useState(false);

  const { orientation, requestAccess, revokeAccess, error } =
    useDeviceOrientation();

  const handleChange = (e) => {
    setChecked(e.target.checked);
    return checked ? revokeAccess() : requestAccess();
  };

  return (
    <div>
      <div>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        {orientation && (
          <div data-testid="device-position">
            <div>alpha: {orientation.alpha}</div>
            <div>beta {orientation.beta}</div>
            <div>gamma {orientation.gamma}</div>
          </div>
        )}
        {error ? <div className="error">{error.message}</div> : null}
      </div>
    </div>
  );
};

export { Device as default } from './Device.js';

/// TODO: check is working after PWA install
