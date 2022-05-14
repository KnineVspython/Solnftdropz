import { getPosts } from 'utils/mdx-utils'
import { ArrowIcon, Anchor, Image } from 'components'
import { NextSeo } from 'next-seo'
import getConfig from 'next/config'
// import SEO from 'components/SEO'

export default function HomePage({ posts }) {
  const global_data = getConfig().publicRuntimeConfig
  return (
    <>
      <NextSeo title={global_data.name} description={global_data.description} />
      <h1 className='text-3xl lg:text-5xl text-center mb-12'>
        {global_data.blogTitle}
      </h1>
      <ul className='w-full'>
        {posts.map((post) => (
          <SingleArticle key={post.filePath} {...post} />
        ))}
      </ul>
    </>
  )
}

function SingleArticle(props) {
  const { date, title, description, image } = props.data
  const img_src = image && `/images/${image}`
  // prettier-ignore
  return (
    <li className='md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0'>
      <Anchor as={`/posts/${props.filePath.replace(/\.mdx?$/, '')}`} href={`/posts/[slug]`} className='py-6 lg:py-10 px-6 lg:px-16 focus:outline-none focus:ring-4 flex flex-col md:flex-row items-center gap-3'>
        <div className='w-full'>
          {date && <p className='uppercase mb-3 font-bold opacity-60'>{date}</p>}
          <h2 className='text-2xl md:text-3xl'>{title}</h2>
          {description && <p className='mt-3 text-lg opacity-60'>{description}</p>}
          <ArrowIcon className='mt-4' />
        </div>
        {img_src && (
          <Image src={img_src} alt={title} height={150} width={150}  className='shrink-0 rounded-xl'/>
        )}
      </Anchor>
    </li>
  )
}

export function getStaticProps() {
  const posts = getPosts()

  return { props: { posts } }
}
