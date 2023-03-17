/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        linear: 'gradient 1',
        myGray : '#EEEEEE',
        myBlue : '#F2F6FF',
        sidebar : '#061A6F',
        search : '#D3D3D3',
        overlay : 'rgba(49,49,49,0.8)',
        myPurple : '#0A1122',
        myNavyBlue : '#03194D',
        select : '#fafafa',
      },

      colors : {
        textColor : '#ffffffb3',
        greyColor : 'rgba(255, 255, 255, 0.8',
      }

    },
  },
  plugins: [],
}

