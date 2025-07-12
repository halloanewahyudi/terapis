import tailwindConfig = require("./tailwind.config");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@nuxt/icon'
  ],

  // config supabse url by .env
   supabase: {
     url: process.env.SUPABASE_URL,
     key: process.env.SUPABASE_KEY,
     redirect: false
   },

 
  css: ['~/assets/style.css'],
  
  tailwindcss:{
    config: tailwindConfig
  },

  googleFonts: {
    display: 'swap',
    families: {
      'Nunito': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      'Lora': {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    }
  }
})