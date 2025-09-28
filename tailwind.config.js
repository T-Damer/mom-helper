/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  future: {
    hoverOnlyWhenSupported: true,
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          bgLight: '#FAFAFA',
          commonWhite: 'var(--common-white)',
          commonGray: '#D9D9D9',
          primary: '#4B64EC',
          primaryTransparent: '#4B64EC16',
          primaryDark: '#373061',
          primaryDarkSemiTransparent: '#37306150',
          primaryDarkTransparent: '#37306112',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          bgLight: '#FAFAFA',
          commonWhite: 'var(--common-white)',
          commonGray: '#D9D9D9',
          primary: '#4B64EC',
          primaryTransparent: '#4B64EC16',
          primaryDark: '#373061',
          primaryDarkSemiTransparent: '#37306150',
          primaryDarkTransparent: '#37306112',
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        commonWhite: 'var(--common-white)',
      },
      rotate: {
        135: '135deg',
      },
    },
  },
}
