var app = new Vue({
    el: '#root',

    data: {

      home: "Home",
      aboutUs: "About Us",
      feature: "Feature",
      testimonials: "Testimonials",
      contactUs: "Contact US",

      menu: [
        {
          linkMenu: "About Us"
        },

        {
          linkMenu: "Theme"
        },

        {
          linkMenu: "Features"
        },

        {
          linkMenu: "Pricing"
        },

        {
          linkMenu: "Blog"
        }
      ],

      aboutUs: [
        {
          linkAboutUs: "About Sofbox"
        },

        {
          linkAboutUs: "Roadmap"
        },

        {
          linkAboutUs: "How it Work"
        },

        {
          linkAboutUs: "Team"
        },

        {
          linkAboutUs: "News"
        }
      ],

      quickLinks: [
        {
          quickLinks: "About Us"
        },

        {
          quickLinks: "Theme"
        },

        {
          quickLinks: "Features"
        },

        {
          quickLinks: "Pricing"
        },

        {
          quickLinks: "Blog"
        }
      ]

    },

    methods: {

    },

    mounted: {

    }
})