import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from 'utils/mdx-utils'

import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

import { Anchor, ArrowIcon, Image } from 'components'
import { NextSeo } from 'next-seo'
import getConfig from 'next/config'

const components = {
  a: Anchor,
  Head,
}

function PostPage(props) {
  const { source, frontMatter: FM, prevPost, nextPost } = props

  const img_src = FM.image && `/images/${FM.image}`
  const aspectRatio = FM?.aspect_ratio?.toString() || '16/9'
  const seo = {
    title: FM.title,
    description: FM.description,
  }

  return (
    <div className='px-6 md:px-0'>
      <NextSeo {...seo} />
      <header>
        <h1 className='text-3xl md:text-5xl dark:text-white text-center mb-12'>
          {FM.title}
        </h1>
        {FM.description && (
          <p className='text-xl mb-6 text-center'>{FM.description}</p>
        )}
        {img_src && (
          <div className='relative rounded-lg overflow-hidden mb-6' style={{aspectRatio}}>
            <Image src={img_src} alt={FM.title} layout='fill' />
          </div>
        )}
      </header>
      <article className='prose dark:prose-dark'>
        <MDXRemote {...source} components={components} />
      </article>
      {/* prettier-ignore */}
      <div className='grid md:grid-cols-2 lg:-mx-24 mt-12'>
        {prevPost && (
          <Anchor href={`/posts/${prevPost.slug}`} className='py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col'>
            <p className='uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60'>Previous</p>
            <h4 className='text-2xl text-gray-700 mb-6 dark:text-white'>{prevPost.title}</h4>
            <ArrowIcon className='transform rotate-180 mx-auto md:mr-0 mt-auto' />
          </Anchor>
        )}
        {nextPost && (
          <Anchor href={`/posts/${nextPost.slug}`} className='py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col'>
            <p className='uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60'>Next</p>
            <h4 className='text-2xl text-gray-700 mb-6 dark:text-white'>{nextPost.title}</h4>
            <ArrowIcon className='mt-auto mx-auto md:ml-0' />
          </Anchor>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const { mdxSource, data } = await getPostBySlug(params.slug)
  const prevPost = getPreviousPostBySlug(params.slug)
  const nextPost = getNextPostBySlug(params.slug)

  if (!mdxSource) return { notFound: true }
  return { props: { source: mdxSource, frontMatter: data, prevPost, nextPost } }
}

export async function getStaticPaths() {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return { paths, fallback: false }
}

export default PostPage
