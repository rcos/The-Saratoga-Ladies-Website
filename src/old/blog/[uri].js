import { client } from 'lib/apollo'
import { gql } from "@apollo/client"
import styles from '@/styles/Home.module.css'
import { Header } from "../../common/components/ui/header/header.js"
import { Footer } from "../../common/components/ui/footer/footer.js"

import Image from 'next/image'
import IMG0 from '@/images/Hero_First_New.jpg'
import {useRouter} from 'next/router'
import { useQuery} from '@apollo/client'

export default function SlugPage({ post }) {
    const router = useRouter();

    if (router.isFallback){
        return <div>Loading...</div>
    }
    const postDate = new Date(post.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = postDate.toLocaleDateString('en-US', options);



    return (
        
        <main className={styles.main}>
        <div className="page-wrapper">
        <div>
            <Header/>
            <div className={styles.blogContainer}>
                <div className={styles.fullWidthImage}> 
                    <Image src={IMG0} className={styles.bannerImage} alt="" ></Image>
                    <h className={styles.bannerTitle}>{post.title}</h>
                </div>

                <div className={styles.blogName}> Written by: {post.author.node.firstName} {post.author.node.lastName} </div>
                <div className={styles.blogDate}> Published: {formattedDate} </div>
                <div dangerouslySetInnerHTML={{__html: post.content}} className={styles.blogContent}></div>
            </div>
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
                date
                content
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
        variables: { id: params.uri }    
    });


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
    };
    
}

export async function getStaticPaths(){
    const paths = [];
    return {
        paths,
        fallback: 'blocking'
    };
}