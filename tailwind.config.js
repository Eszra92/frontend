module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: ['Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
    extend: {
      colors: {
        'fpl-green': '#01ff86',
        'fpl-purple': '#37003c',
        'fpl-pink': '#65094c',
        'fpl-purple-bright': '#963cff'
      },
      inset: {
        '1': '1rem',
        '4': '4rem',
        '50': '50%',
      },
    }
  }
}
