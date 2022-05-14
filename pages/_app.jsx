import 'styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css'
import { Header, Footer } from 'components'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import getConfig from 'next/config'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  const { name, site_name } = getConfig().publicRuntimeConfig || {}
  const default_seo = {
    defaultTitle: name,
    titleTemplate: `%s | ${site_name}`,
    openGraph: {
      type: 'website',
      site_name,
    },
    twitter: {
      // change this to your twitter handle and remove the '//'
      // handle: '@github',
      cardType: 'summary_large_image',
    },
  }
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <link rel='icon' type='image/vnd.microsoft.icon' href='/favicon.ico' />
        <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
      </Head>
      <DefaultSeo {...default_seo} />
      <span className='theme-bejamas' />
      <div className='relative overflow-hidden'>
        <div className='flex flex-col items-center max-w-2xl w-full mx-auto min-h-screen'>
          <Header />
          <main className='w-full flex flex-1 flex-col flex-center'>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <div className='colorBackground fixed top-20 opacity-40 dark:opacity-60' />
        <div className='colorBackgroundBottom absolute bottom-0 opacity-20 dark:opacity-20' />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
