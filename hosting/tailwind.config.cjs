/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue,astro,html}",
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
