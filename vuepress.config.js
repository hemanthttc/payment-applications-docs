const { defaultTheme } = require('@vuepress/theme-default')
const { gitPlugin } = require('@vuepress/plugin-git')

module.exports = {
    lang: 'en-US',
    title: 'Payment Applications Docs',
    base: '/payment-applications-docs/',
    description: 'Payment Application Docs Helps us to understand the payment prodcuts and services we have',
    // https://ttc.com/wp-content/uploads/2019/12/cropped-cropped-cropped-ttc-favicon-32x32-1-32x32.jpg
    head: [['link', { rel: 'icon', href: 'https://ttc.com/wp-content/uploads/2019/12/cropped-cropped-cropped-ttc-favicon-32x32-1-32x32.jpg' }]],    
    theme: defaultTheme({
      logo: "https://ttc.com/wp-content/uploads/2021/02/TTC_Logo_REG_RGB_NoURL-updated.jpg",
      navbar: [
       
        // NavbarGroup
        {
          text: 'Aplications',
          children: ['/','/payment-gateway/', '/payment-service/', '/semafone/'],
        },
         // NavbarItem
         {
          text: 'Foo',
          link: '/foo/',
        },
      ],
    }),
    plugins: [
      gitPlugin({
        // options
      }),
    ],
  }