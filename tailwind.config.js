/* tailwind.config.js */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cromo: '#B7B7B7', // Cromo
        plata_claro: '#E0E0E0', // Plata brillante
        gris_azul: '#6699FF', // Gris metálico azulado
        azul_neon: '#007BFF', // Azul neón
        cian_neon: '#00FFFF', // Cian
        gris_oscuro: '#333', // Gris oscuro
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
