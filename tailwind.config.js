/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.{html,md}",
    ],
    theme: {
        extend: {
          gridTemplateColumns: {
            // new custom grids for links
            'center2': '112px 112px',
            'center3': '112px 112px 112px',
            'center4': '112px 112px 112px 112px',
            'center5': '112px 112px 112px 112px 112px',
            'center6': '112px 112px 112px 112px 112px 112px',
            'center2-mono': '88px 88px',
            'center3-mono': '88px 88px 88px',
            'center4-mono': '88px 88px 88px 88px',
            'center5-mono': '88px 88px 88px 88px 88px',
            'center6-mono': '88px 88px 88px 88px 88px 88px',
          }
        }
      },
    future: {
      // disable hover on touch devices
      hoverOnlyWhenSupported: true,
    },
  }