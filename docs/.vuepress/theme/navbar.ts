import { NavbarConfig } from "vuepress";

export const navbar: NavbarConfig = [
   {
       text: 'Guide',
       link: '/guide/',
   },
   {
      text: 'v0.0.1-alpha',
      children: [
         {
            text: 'v0.0.1-alpha',
            link: '',
         }
      ]
   }
]