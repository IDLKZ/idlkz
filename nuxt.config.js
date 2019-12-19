
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'IDL - Создание, разработка, техническая поддержка сайтов по всему Казахстану',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                name: 'yandex-verification',
                content: "8660c1dbe81cd7a9"
            },
            {
                name: 'keywords',
                content: "создание сайта, создать сайт в Казахстане, создать сайт в Шымкенте,создать сайт в Алмате,создать сайт в Астане,создать сайт в Караганде, создать сайт быстро и качественно, оптимизация сайта,создать интернет магазин,SEO оптимизация"
            },
            {
                name: 'description',
                content: "Создание сайтов по всему Казахстану - Легко!. IDL занимается созданием сайтов, технической поддержкой сайтов, оптимизацией сайтов, сайты любой сложности по гибкой цене, работаем по всему Казахстану в том числе в Шымкенте,Нурсултане, Алмате, Караганде, Туркестане и других городах."
            },
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/img/logo.ico'},
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css?family=Alice|Ledger|Philosopher|Spectral&display=swap"
            },


        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
         "@assets/style.scss",

    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        "~/plugins/donut.js",
        {src: "~/plugins/aos", ssr: false},
        {src: "~/plugins/vuelidate", ssr: true},
        {src: "~/plugins/smoothscroll", ssr: false},
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: '153765894'
        }]
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        ['vue-sweetalert2/nuxt'],
        '@nuxtjs/axios',
        ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['faDollarSign', 'faHome', 'faBuilding', 'faDesktop', 'faCubes', 'faAddressBook', 'faSpaceShuttle', 'faCode', 'faBrush', 'faHandHoldingUsd', 'faFileCode', 'faTint', 'faCog', 'faHeadset', 'faLightbulb', 'faCodeBranch', 'faCogs', 'faRocket', 'faAddressCard', 'faHeart', 'faCheckCircle']
                }
            ]
        }],

    ],


    /*
    ** Build configuration
    */
    build: {

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
}




