// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss"
    ],
    buildModules: [
        ['nuxt-storm', {nested: true, alias: true}],
    ]
})
