// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/sass/main.scss"],
  head: {
    link: [
      {
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com',
			},
      {
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap',
			},
    ]
  },
  imports: {
    autoImport: true
  }
})
