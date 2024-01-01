import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "brain.rgolab.com",
  description: "",
  themeConfig: {
    docFooter: {
      next: false,
      prev: false,
    },
    externalLinkIcon: true,
    aside: true,
    outline: 1,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Photos', link: 'https://photos.rgolab.com/' },
      { text: 'Products', link: '/products' }
    ],

    sidebar: [
      {
        text: 'Home', link: '/',
        items: [
          { text: 'About Me', link: '/home/about-me' },
          { text: 'Bucket List', link: '/home/bucket-list' },
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Apps', link: '/apps' },
          { text: 'Hardware', link: '/hardware' }
        ]
      },
      {
        text: 'Security',
        items: [
          { text: 'Cheats Sheet', link: '/security/cheats-sheet' },
          { text: '...', link: '/hardware' }
        ]
      },
      {
        text: 'CTFNot.es',
        link: '/ctfnotes',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'CTF2023',
            collapsed: true,
            items: [
              { text: 'test', link: '/link'},
              { text: 'test', link: '/link'}
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'insta' },
      { icon: 'linkedin', link: 'https://linkedin' },
      { icon: 'youtube', link: 'youtube' }
    ]
  }
})
