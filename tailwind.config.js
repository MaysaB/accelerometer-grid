/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Adding custom classes for 100 columns
        'cols-100': 'repeat(100, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        // Adding custom classes for 100 rows
        'rows-100': 'repeat(100, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
