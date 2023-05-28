module.exports = {
    content: [
      "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/preline/dist/*.js',
    ],
    safelist: [
    ],
    theme: {
        extend: {
          colors: {
            'grayish': '#ffffff14',
            'backgroundGray': 'rgba(26, 29, 33, 0.96)',
            'steem-green-500': '#B6F09C',
            'noble-black-300': '#9B9C9E',
            'noble-black-400': '#686B6E',
            'noble-black-500': '#363A3D',
            'noble-black-600': '#1A1D21',
            'glass-stroke': 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)',
            'light-gray': 'rgba(255, 255, 255, 0.08)'
          },
          boxShadow: {
            'gray-shade': '0px 24px 64px -16px rgba(0, 0, 0, 0.24), inset 16px 24px 64px -24px rgba(255, 255, 255, 0.04), inset 0px 8px 12px rgba(255, 255, 255, 0.04)',
          },
          backgroundImage: {
            'glass-stroke': 'linear-gradient(117.58deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0) 100%)',
            'blue-shade': 'linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)',
            'green-shade': 'linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%)'
          }
        },
      },
    plugins: [
        require('preline/plugin'),
    ],
  }