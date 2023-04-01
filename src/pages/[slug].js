import { client } from 'lib/apollo';
import { gql } from '@apollo/client';

import { Header } from "../common/components/ui/header/header.js"
import { Footer } from "../common/components/ui/footer/footer.js"

export default function Page({ page }) {
  return (
    <>
      <Header />
      <div style={{ margin: "25%", textAlign: "center" }}>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const GET_PAGE_BY_SLUG = gql`
    query GetPageBySlug($slug: String!) {
      pageBy(uri: $slug) {
        title
        content
      }
    }
  `;

  const response = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  });

  const page = response?.data?.pageBy;

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
    const GET_ALL_PAGES = gql`
      query GetAllPages {
        pages {
          edges {
            node {
              slug
            }
          }
        }
      }
    `;
  
    const response = await client.query({
      query: GET_ALL_PAGES,
    });
  
    const pages = response?.data?.pages?.edges || [];
  
    const paths = pages.map(({ node }) => ({
      params: {
        slug: node.slug,
      },
    }));
  
    return {
      paths,
      fallback: 'blocking',
    };
  }
  