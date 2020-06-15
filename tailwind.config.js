module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif']
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],

  },
  plugins: [require('@hursey013/tailwindcss-uswds')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
