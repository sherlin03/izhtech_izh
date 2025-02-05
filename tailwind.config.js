/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container:{
      padding:'2rem'
    },
    fontFamily: {
      'body': [
        'DM Sans', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        '"DM Sans"', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ]
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

