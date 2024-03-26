import { GraphQLClient } from 'graphql-request'
import { AllPosts, SinglePost } from '@/queries/posts'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { cookies } from 'next/headers'

async function getPosts() {
  const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json'
    }
  })

  const data = await graphQLClient.request(AllPosts)
  return data.posts
}

async function getData(slug) {
  try {
    const apiUrl =
      cookies().get('apiUrl')?.value || process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
    const graphQLClient = new GraphQLClient(apiUrl, {
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await graphQLClient.request(SinglePost, { slug })
    return data.post
  } catch (error) {
    console.error('GraphQL Error:', error.response?.errors || error.message)
    throw new Error('GraphQL Request Failed')
  }
}

export async function generateMetadata({ params }) {
  const post = await getData(params.slug)
  if (!post) return notFound()
  return {
    title: post.title,
    description: post.description || post.seo?.description,
    openGraph: {
      images: [
        {
          url: post.coverImage?.url,
          width: post.coverImage?.width,
          height: post.coverImage?.height
        }
      ]
    }
  }
}

export default async function Post({ params }) {
  const post = await getData(params.slug)

  if (!post) {
    return notFound()
  }
  return (
    <article>
      <header className="pt-6 lg:pb-10">
        <div className=" space-y-1">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl md:text-5xl ">
            {post.title}
          </h1>
        </div>
      </header>
      <div
        className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-[200px_1fr] gap-x-6 pb-16 lg:pb-20"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <dl className="pt-6 pb-10 lg:pt-0 lg:border-b lg:border-gray-200">
          {post.author && (
            <>
              <dt className="mb-2 text-sm font-medium leading-5">Written by</dt>
              <dd>
                <ul className="space-x-8 sm:space-x-12 lg:space-x-0 lg:space-y-8">
                  <li key={post.author?.remoteId} className="flex space-x-2">
                    {post.author?.picture && (
                      <Image
                        className="w-10 h-10 rounded-full"
                        src={post.author?.picture.url}
                        width={post.author?.picture.width}
                        height={post.author?.picture.height}
                        alt={post.author?.name}
                      />
                    )}
                    <dl className="flex-1 text-sm font-medium leading-5">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900">{post.author?.name}</dd>
                      {post.author?.title && (
                        <>
                          <dt className="sr-only">Title</dt>
                          <dd className="text-gray-500">
                            {post.author?.title}
                          </dd>
                        </>
                      )}
                    </dl>
                  </li>
                </ul>
              </dd>
            </>
          )}
          <div className="mt-8">
            <dt className="text-sm font-medium leading-5">Published on</dt>
            <dd className="text-base leading-6 font-medium text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-us', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            </dd>
          </div>
        </dl>
        <div className="prose lg:pb-0 lg:row-span-2">
          <RichText content={post.content.raw} />
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 lg:col-start-1 lg:row-start-2">
          <div className="pt-8">
            <Link href="/" className="text-purple-500 hover:text-purple-600">
              &larr; Back to the blog
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
