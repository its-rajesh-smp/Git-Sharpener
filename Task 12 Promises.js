let allPost=[]
let userActivityTime=Date.now()

function updateUserLastActivity(){
    return new Promise((res,rej)=>{
        setTimeout(function() {
            userActivityTime=Date.now()
            res()
        }, 1000);
    })

}

function createPost(post){
    return new Promise((res,rej)=>{
        setTimeout(function() {
            allPost.push(post)
            console.log("~Post Created");
            res()
        }, 2000);

    })
}

function printPosts(){
    return new Promise((res,rej)=>{
        setTimeout(function() {
            if(allPost.length>0){
                allPost.forEach((post)=>{
                    console.log(post);
                })
                res()
            }
            else{
                rej("Post Not Exists")
            }
        }, 2000);
    })
}


function deletePost(){
    return new Promise((res,rej)=>{
        setTimeout(function() {
                
                if(allPost.length>0){
                    let deletedPost="Post Deleted " + allPost.pop()
                    res(deletedPost)
                }
                else{
                    rej("Nothing To Delete")
                }
        }, 2000);

    })
}


Promise.all([createPost("Post1"),updateUserLastActivity()]).then(()=>{
    Promise.all([createPost("Second Post"),updateUserLastActivity()]).then(()=>{
        printPosts().then(()=>{
            deletePost().then((val)=>{
                console.log(val);
                printPosts().then(()=>{

                }).catch((e)=>{
                    console.log(e);
                })
            }).catch((e)=>{
                console.log(e);
            })
        }).catch((e)=>{
            console.log(e);
        })
    })
})