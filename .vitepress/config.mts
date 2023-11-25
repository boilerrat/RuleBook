import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Grant Ships Rule Book",
  description: "An Evolutionary Grants Game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'How To Play', link: '/how-to-play/' }
    ],

    sidebar: [
      {
        text: 'How To Play',
        items: [
          { text: 'As A DAO Member', link: 'how-to-play/as-a-dao-mem' },
          { text: 'As A Grant Ship Operator', link: 'how-to-play/as-a-gs-op' },
          { text: 'As A Grantee', link: 'how-to-play/as-a-grantee' },
          { text: 'As A Facilitator', link: 'how-to-play/as-a-faci' }
        ]
      },
      {
        text: 'FAQs',
        items: [
          { text: 'Reasoning', link: '/faqs/reasoning' },
          { text: 'Grant Ships FAQs', link: '/faqs/grantShipsFAQ' }
        ]
      },
      {
        text: 'Misc',
        items: [
          { text: 'Our Team', link: 'team'},
          { text: 'Whitepaper', link: 'whitepaper' },
          { text: 'Sample Tools', link: '/tools/' ,
            items: [
              { text: 'DAOhaus', link: '/tools/daohaus' },         
          ]}
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
