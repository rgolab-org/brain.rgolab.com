import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "brain.rgolab.com",
  description: "",
  themeConfig: {
    logo: '/rg.png',
    search: {
      provider: 'local'
    },
    // docFooter: {
    //   next: false,
    //   prev: false,
    // },
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
          { text: 'Apps', link: '/tools/apps' },
          { text: 'Hardware', link: '/tools/hardware' },
          { text: 'Shortcuts', link: '/tools/shortcuts' }
        ]
      },
      {
        text: 'Cheats', link: '/cheats',
        items: [
          { text: 'Useful cheats', link: '/cheats' },
          { text: 'Security resources', link: '/security/resources' },
        ]
      },
      {
        text: 'CTFNot.es',
        link: '/ctfnotes',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'CTF\'s 2023',
            collapsed: false,
            items: [
              {
                text: 'PotluckCTF2023',
                collapsed: true,
                items: [
                  { text: 'Hunkgry Helmsman', link: '/ctfnot.es/2023/PotluckCTF/hungry-helmsman' }
                ]
              },
            ]
          },
          {
            text: 'CTF\'s 2024',
            collapsed: false,
            items: [
              {
                text: 'IrisCTF2024',
                collapsed: true,
                items: [
                  { text: 'Not Just Media', link: '/ctfnot.es/2024/IrisCTF/not-just-media' },
                  { text: 'Skat\'s Network History', link: '/ctfnot.es/2024/IrisCTF/skats-network-history' },
                  { text: 'Skat\'s SD Card', link: '/ctfnot.es/2024/IrisCTF/skats-sd-card' },
                  { text: 'What\'s My Password', link: '/ctfnot.es/2024/IrisCTF/whats-my-password' },
                  { text: 'Buzzbuzz', link: 'ctfnot.es/2024/IrisCTF/buzzbuzz'}
                ]
              },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/rafal.golab/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/rgolab/' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCy_9BJqiwJjz6ILztSp7HTA' }
    ]
  }
})
