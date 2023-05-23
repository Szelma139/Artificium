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
            'steem-green-500': '#B6F09C'     
          },
          boxShadow: {
            'gray-shade': '0px 24px 64px -16px rgba(0, 0, 0, 0.24), inset 16px 24px 64px -24px rgba(255, 255, 255, 0.04), inset 0px 8px 12px rgba(255, 255, 255, 0.04)'
          }
        },
      },
    plugins: [
        require('preline/plugin'),
    ],
  }