import { GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import { SingleNav } from '@/queries/navigations'
async function getNav(navId) {
  try {
    const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        'content-type': 'application/json'
      }
    })
    const data = await graphQLClient.request(SingleNav, { navId })
    return data.navigation.link
  } catch (error) {
    console.error('Problem with GraphQL request:', error)
    throw new Error('Problem with GraphQL request:')
  }
}

export default async function NavList({ navId }) {
  const navItems = await getNav(navId)
  return (
    <>
      {navItems.map((navItem) => {
        const url = navItem.externalUrl || navItem.page.slug
        return (
          <li key={navItem.id}>
            <Link href={`/${url}`}>{navItem.displayText}</Link>
          </li>
        )
      })}
    </>
  )
}
