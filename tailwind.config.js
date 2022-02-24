module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent', 
        current: 'currentColor',
        'orangePrimary': '#FF670C',
        'orangeSecondary': '#faae2c',
        'whitePrimary': '#f2f0ee',
        'blackPrimary': '#3c3c3c'
      },
      backgroundImage:{
        'aboutImage': "url('/img/bgAbout.png')",
        'headerImage': "url('/img/bgHeader.png')",
        'servicesImage': "url('/img/bgServices.png')",
        'suscripcionImage': "url('/img/bgSuscripcion.png')",
        'bgHeaderTrabaja': "url('/img/bgHeaderTrabaja.png')",
        'bgAbout': "url('/img/bg-about.png')",
        'bgGrupo21': "url('/img/Grupo-21.png')",
        'bgContact': "url('/img/bg-contact.png')",
        'bgForm': "url('/img/bg-form.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
