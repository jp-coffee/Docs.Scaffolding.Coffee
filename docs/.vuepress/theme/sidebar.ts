import { SidebarConfig } from "vuepress";

const frameworksList: string[] = ['Vue.js', 'React', 'Nuxt.js', 'Next.js']

const frameworks: SidebarConfig = frameworksList.map(framework => {
   return {
      text: framework,
      link: `/guide/frameworks/${framework.toLowerCase().replace('.', '')}`
   }
})

const guideSidebar: SidebarConfig = [
   {
      text: "Why Scaffolding.Coffee?",
      link: "/guide/why-scaffolding-coffee",
   },
   {
      text: "Getting Started",
      link: "/guide/",
   },
   {
      text: "Frameworks",
      link: "/guide/frameworks",
      children: [
         ...frameworks
      ]
   },
   {
      text: "Features",
      link: "/guide/features",
   }
]

const additionalSidebar: SidebarConfig = [
   {
      text: "Options",
      link: "/additional/options",
   },
   {
      text: "Updating",
      link: "/additional/updating",
   },
   {
      text: "FAQ",
      link: "/additional/faq",
   },
   {
      text: "Contributing",
      link: "/additional/contributing",
   },
   {
      text: "License",
      link: "https://opensource.org/licenses/MIT",
   },
]

const guideAndAdditionalSidebar: SidebarConfig = [
   {
         text: "Guide",
         children: [
            ...guideSidebar
         ]
      },
      {
         text: "Additional",
         children: [
            ...additionalSidebar
         ]
      }
]

export const sidebar: SidebarConfig = {
   "/guide": [
     ...guideAndAdditionalSidebar
   ],
   "/additional": [
      ...guideAndAdditionalSidebar
   ]
}