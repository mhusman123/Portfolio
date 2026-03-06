import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Muhammad Usman Components',
    brandUrl: 'https://github.com/mhusman123/Portfolio',
  },
});
