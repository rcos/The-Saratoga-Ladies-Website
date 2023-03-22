import { client } from 'lib/apollo';
import { gql } from '@apollo/client';

import { Header } from "../../common/components/ui/header/header.js"
import { Footer } from "../../common/components/ui/footer/footer.js"

export default function SlugPage({ post }) {
    return (
    <>
        <Header/>
        <div style={{margin: "25%", textAlign: "center"}}>
            Title: {post.title}
        </div>
        <Footer/>
    </>
    )
}


export async function getStaticProps({ params }){
    const GET_POST_BY_URI = gql`
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
        query: GET_POST_BY_URI,
        variables: {
            id: params.uri
        }
    })
    const post = response?.data?.post
    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}