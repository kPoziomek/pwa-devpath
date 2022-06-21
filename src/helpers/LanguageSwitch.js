import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel id="language-select">Language</InputLabel>
        <Select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="pl">Polish</MenuItem>
          <MenuItem value="zh">Chinese</MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSwitch;
