/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      spacing: {
        'screen-tb': 'calc(100vh - 1.95rem)',
      },
    },
  },
  
}

