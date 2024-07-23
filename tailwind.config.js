/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`cols-${num}`] = `repeat(${num}, minmax(0, 1fr))`;
          return acc;
        }, {}),
      },
      
      gridTemplateRows: {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, num) => {
          acc[`rows-${num}`] = `repeat(${num}, minmax(0, 1fr))`;
          return acc;
        }, {}),
      },
    },
  },
  plugins: [],
};
