// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
      "nuxt-swiper",
  ],
  router: {
    middleware: ['manifest-route-rule']
  },
  hooks: {
    'build:extendRoutes'(routes, resolve) {
      routes.push({
        name: 'manifest-route-rule',
        path: '/some-path',
        component: resolve(__dirname, 'middleware/manifest-route-rule.js'),
        // @ts-ignore - Custom property, may need type adjustments
        override: true  // Set this to override the existing middleware
      });
    }
  },

  devtools: { enabled: true },
  app: {
    head: {
      title: "TC Digital Tech Sdn Bhd",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "assets/images/favicon.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap",
        },
        { rel: "stylesheet", href: "/assets/css/flaticon.min.css" },
        { rel: "stylesheet", href: "/assets/css/fontawesome-5.14.0.min.css" },
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/magnific-popup.min.css" },
        { rel: "stylesheet", href: "/assets/css/nice-select.min.css" },
        { rel: "stylesheet", href: "/assets/css/animate.min.css" },
        { rel: "stylesheet", href: "/assets/css/slick.min.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        { rel: "stylesheet", href: "/assets/css/custom.css" },
      ],
    },
  },
  builds: {
    transpile:[
        'vue-scrollto'
    ]
  },
  plugins:[
      '~/plugins/vue-scrollto.client.ts'
  ]

});
