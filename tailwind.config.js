module.exports = {
    content: [
      "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {
          colors: {
            'backgroundGray': 'rgba(26, 29, 33, 0.96)',
            'steem-green-500': '#B6F09C'
            

          }
        },
      },
    plugins: [
        require('preline/plugin'),
    ],
  }