import React, { useEffect } from 'react';

import { Font } from 'expo';

const useFont = () => {
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
      loadFonts();
    };
  }, []);
};

export default useFont;
