const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#f41186",
        "secondary":"#f93ef0",
        "third":"#956bff",
        "hover":"#e11d48",
        "background":"#FFB4DC",
        "text-color":"#313131",
        "description-color":"#858585",
        "base-color":"#ffffff"
      },
   
  
    },
  },
  plugins: [
  
    require('tailwind-scrollbar-hide')
  ],
});
