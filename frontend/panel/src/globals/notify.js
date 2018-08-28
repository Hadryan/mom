import React from 'react';
import ButterToast, { CinnamonSugar } from 'butter-toast';
import log from 'log-with-style';

const typeThemeMap = {
  success: 'green',
  error: 'red',
  info: 'blue'
};

export const notifier = (namespace, icon) => (type, message) => {
  const theme = typeThemeMap[type];

  log(`_[${namespace}:_[c="color: ${theme}; font-weight:bold;"]${type}[c]] ${message}`);

  ButterToast.raise(CinnamonSugar.crunch({
    toastTimeout: 6000,
    dismissOnClick: true,
    theme,
    icon,
    title: <span style={{ fontFamily: 'Roboto' }}>{message}</span>,
    message: <span style={{ fontFamily: 'Roboto' }}>{namespace}</span>,
  }))
};