import { getPosts } from 'utils/mdx-utils'
import { ArrowIcon, Anchor } from 'components'
import { NextSeo } from 'next-seo'
import getConfig from 'next/config'
// import SEO from 'components/SEO'

export default function ErrorPage() {
  const { name } = getConfig().publicRuntimeConfig?.global_data || {}
  return (
    <>
      <NextSeo title='404 - Page Not Found' description={name} />
      <div className='flex items-center p-4 justify-center mb-5'>
        <h1 className='border-r border-black dark:border-white pr-2 mr-2'>404</h1>
        <div className='pl2'>Page Not Found</div>
      </div>
      <Anchor href='/'>Return to Home Page</Anchor>
    </>
  )
}

export function getStaticProps() {
  const posts = getPosts()

  return { props: { posts } }
}
