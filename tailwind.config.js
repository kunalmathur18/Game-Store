/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '-5px -5px 10px rgba(251, 251, 251, 0.784), 5px 5px 15px rgba(96, 65, 65, 0.35)',
      },
    },
  },
  plugins: [],
}
// -5px -5px 10px rgba(251, 251, 251, 0.784),
//                 5px 5px 15px rgba(96, 65, 65, 0.35)