import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "曾老师的学习网站",
  description: "Good Good Study Day Day Up!",
  base: '/welike.vip/',
  head: [
    ['link', { rel: 'icon', href: '/开发.svg' }]
  ],
  themeConfig: {
    logo: '/开发.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: '主页', link: '/' },
      { 
        text: '操作系统', 
        items: [
          { text: 'Linux', link: '/linux' }
        ]
      },
      {
        text: '数据库',
        items: [
          {
            text: '关系型数据库',
            items: [
              { text: 'MySQL', link: '/mysql' },
              { text: 'Oracle', link: '/oracle' }
            ]
          },
          {
            text: 'NoSQL数据库',
            items: [
              { text: 'Redis', link: '/redis' }
            ]
          }
        ]
      },
      {
        text: 'Java开发',
        items: [
          { text: 'JavaSE', link: '/javase' },
          { text: 'JavaEE', link: '/javaee' },
          { text: 'SpringBoot', link: '/springboot' },
          { text: 'MyBatis', link: '/mybatis' }
        ]
      },
      {
        text: 'Web开发',
        items: [
          {
            text: '前端三剑客',
            items: [
              { text: 'HTML', link: '/html' },
              { text: 'CSS', link: '/css' },
              { text: 'JavaScript', link: '/javascript' }
            ]
          },
          { text: 'Vue', link: '/vue' }
        ]
      },
    ],
    sidebar: {
      '/linux/': [
        {
          text: 'Linux基础',
          items: [
            { text: '概述', link: '/linux/' },
          ]
        },
      ],

      '/mysql/': [
        {
          text: 'MySQL基础',
          items: [
            { text: '概述', link: '/mysql/' },
          ]
        },
      ],

      '/oracle/': [
        {
          text: 'Oracle基础',
          items: [
            { text: '概述', link: '/oracle/' },
          ]
        },
      ],

      '/redis/': [
        {
          text: 'Redis基础',
          items: [
            { text: '概述', link: '/redis/' },
          ]
        },
      ],

      '/javase/': [
        {
          text: 'Java基础',
          items: [
            { text: '概述', link: '/javase/' },
          ]
        },
      ],

      '/javaee/': [
        {
          text: 'JavaEE基础',
          items: [
            { text: '概述', link: '/javaee/' },
          ]
        },
      ],

      '/springboot/': [
        {
          text: 'SpringBoot基础',
          items: [
            { text: '概述', link: '/springboot/' },
          ]
        },
      ],

      '/mybatis/': [
        {
          text: 'MyBatis基础',
          items: [
            { text: '概述', link: '/mybatis/' },
          ]
        },
      ],

      
      '/html/': [
        {
          text: 'HTML基础',
          items: [
            { text: '概述', link: '/html/' },
          ]
        },
      ],

      
      '/css/': [
        {
          text: 'CSS基础',
          items: [
            { text: '概述', link: '/css/' },
          ]
        },
      ],

      '/javascript/': [
        {
          text: 'JavaScript基础',
          items: [
            { text: '概述', link: '/javascript/' },
          ]
        },
      ],

      '/vue/': [
        {
          text: 'Vue基础',
          items: [
            { text: '概述', link: '/vue/' },
          ]
        },
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '© 2024 WeLike. All rights reserved.',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">备案/许可证编号：苏ICP备2024142782号</a>'
    }
  }
})
