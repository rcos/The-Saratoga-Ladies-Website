import { client } from 'lib/apollo'
import { gql } from "@apollo/client"
import styles from '@/styles/Home.module.css'
import { Header } from "../common/components/ui/header/header.js"
import { Footer } from "../common/components/ui/footer/footer.js"

export default function SlugPage({ post }) {
    return (
        <main className={styles.main}>
        <div className="page-wrapper">
        <div>
            <Header/>
            <div className={styles.fullWidthImage}> Bruh</div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          <Footer />
        </div>
        </div>
       
      </main>

    )
}

export async function getStaticProps({ params }){
    const GETPOSTBYURI = gql`
        query GetPostByURI($id: ID!) {
            post(id: $id, idType: URI) {
            title
            content
            date
            uri
            author {
                node {
                firstName
                lastName
                }
            }
            }
        }
    `
    const response = await client.query({
        query: GETPOSTBYURI,
        variables: {
            id: params.uri
        }
    })

    const post = response?.data?.post
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths(){
    const paths = [];
    return {
        paths,
        fallback: 'blocking'
    }
}