import { client } from 'lib/apollo'
import { gql } from "@apollo/client"
import styles from '@/styles/Home.module.css'
import { Header } from "../../common/components/ui/header/header.js"
import { Footer } from "../../common/components/ui/footer/footer.js"

import Image from 'next/image'
import IMG0 from '@/images/Hero_First_New.jpg'
import {useRouter} from 'next/router'

export default function SlugPage({ post }) {
    const router = useRouter();

    if (router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <main className={styles.main}>
        <div className="page-wrapper">
        <div>
            <Header/>
            <div className={styles.fullWidthImage}> 
                <Image src={IMG0} className={styles.bannerImage}></Image>
                <h className={styles.bannerTitle}>Title</h>
            </div>
           
            <div dangerouslySetInnerHTML={{__html: post.content}} className={styles.websiteContent}></div>
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
            content
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
    const paths = [];
    return {
        paths,
        fallback: 'blocking'
    }
}