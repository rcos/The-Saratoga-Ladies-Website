import { getPostByUri } from "lib/test-data";
import { client } from 'lib/apollo'
import { gql } from "@apollo/client"

export default function SlugPage({ post }) {
    return (
        <div>
            <p> Bruh </p>
        </div>
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