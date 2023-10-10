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
          }
        }
      },
    future: {
      // disable hover on touch devices
      hoverOnlyWhenSupported: true,
    },
  }