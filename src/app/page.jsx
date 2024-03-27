import { GraphQLClient } from 'graphql-request'
import { AllPosts } from '../queries/posts'
import Link from 'next/link'

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

export default async function Home({}) {
  const allPosts = await getPosts()
  return (
    <div className="divide-y divide-gray-200">
      <div className="font-poppins pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-poppins font-extrabold text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ">
          Dog Trainig Hub
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          Canine Coaching for Every Owner
        </p>
      </div>

      <ul className="divide-y divide-gray-400/50">
        {allPosts.map((post) => {
          return (
            <li key={post.id} className="p-12 hover:bg-orange-200  rounded-md">
              <article className="space-y-2 xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="text-gray-900"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <div className="prose max-w-none text-black-300">
                        {post.excerpt}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between text-base leading-6 font-medium">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-purple-500 hover:text-purple-600"
                      aria-label={`Read "${post.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 text-gray-500">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-us', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </dd>
                    </dl>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
