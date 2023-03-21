export async function getAllPosts(){
    const posts = postsGenerator()
    const response = {
        data: {
            posts: {
                nodes: posts
            }
        }
    }
    return response
}

export async function getPostByUri(uri){
    const posts = postsGenerator()
    const post = posts.filter(post => post.uri === `/${uri}`)[0]
    const response = {
        data: {
            post
        }
    }
    return response
}

function postsGenerator(){
    return [
        {
            title:"Blog Post Title 1",
            content: "bruh",
            uri: "/title-1",
            author: {
                node: {
                    firstName: "Jose",
                    lastName: "Idrovo"
                }
            },
            data: "02/23/2023"
        },
    ]
}

const loremIpsum = "<p> Lorem ipsum </p>"