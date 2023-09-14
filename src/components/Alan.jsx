import React, { useContext, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { ColorModeContext } from '../utils/ToggleColorMode';
const alanAIKey = process.env.REACT_APP_ALAN_AI_KEY;

const Alan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
        key: alanAIKey,
        onCommand: ({ command, mode }) => {
          if (command === 'changeMode') {
            if (mode === 'light') {
              setMode('light');
            } else {
              setMode('dark');
            }
          }
        }
    });
  }, []);
};

export default Alan;
