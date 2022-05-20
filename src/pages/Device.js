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
          <ul>
            <li>
              ɑ: <code>{orientation.alpha}</code>
            </li>
            <li>
              β: <code>{orientation.beta}</code>
            </li>
            <li>
              γ: <code>{orientation.gamma}</code>
            </li>
          </ul>
        )}
        {error ? <div className="error">{error.message}</div> : null}
      </div>
    </div>
  );
};

export { Device as default } from './Device.js';

/// TODO: check is working after PWA install
