import type { Preview } from '@storybook/react';
import '../src/app/globals.css'; // Import global styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {},
      options: {
        restoreScroll: true,
      },
    },
  },
};

export default preview;
