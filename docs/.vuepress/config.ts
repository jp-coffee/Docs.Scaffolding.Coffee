import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './theme/navbar'
import { sidebar } from './theme/sidebar'

export default defineUserConfig({
   lang: 'en-GB',
   title: 'Scaffolding.Coffee',
   description: 'Scaffolding.Coffee is a collection of tools and resources for developers to help them build better software.',

   theme: defaultTheme({
      colorMode: 'auto',
      colorModeSwitch: true,
      contributors: true,
      contributorsText: 'Contributors',
      docsBranch: 'main',
      docsDir: 'docs',
      docsRepo: 'jp-coffee/docs.scaffolding.coffee',
      editLinkText: 'Edit this page on GitHub',
      lastUpdatedText: 'Last Updated',
      logo: 'https://raw.githubusercontent.com/jp-coffee/Scaffolding.Coffee/main/assets/scaffolding.coffee.svg',
      navbar,
      repo: 'jp-coffee/scaffolding.coffee',
      repoLabel: 'GitHub',
      sidebar
   })
})