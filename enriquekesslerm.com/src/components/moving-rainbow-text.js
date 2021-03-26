import React from 'react';
import { Text } from 'theme-ui'

import useRainbow from '../hooks/use-rainbow.hook';

const MagicRainbowText = ({
  children,
  intervalDelay = 1300,
  ...delegated
}) => {
  const transitionDelay = intervalDelay * 1.25;

  const colors = useRainbow({ intervalDelay });

  const colorKeys = Object.keys(colors);

  return (
    <Text
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
    >
      {children}
    </Text>
  );
};

export default MagicRainbowText;
