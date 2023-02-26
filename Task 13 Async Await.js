// console.log("~First Person Show Ticket");
// console.log("~Second Person Show Ticket");

// let promiseWifeBringingTicket=new Promise((res,rej)=>{
//     setTimeout(function() {
//         res("Ticket")
//     }, 3000);
// })

// let getPopcorn=promiseWifeBringingTicket.then((value)=>{
//     console.log("Wife Come With Ticket");
//     console.log('Hasband: We should go in');
//     console.log('wife: I Am hungry');
//     return new Promise((res,rej)=>{
//         setTimeout(function() {
//             res(`${value} popcorn`)
//         }, 2000);
//     })
// })

// let butter=getPopcorn.then((value)=>{
//     console.log('Hasband: We should go in');
//     console.log('wife: I need butter');
//     return new Promise((res,rej)=>{
//         setTimeout(function() {
//             res(`${value} Butter`)
//         }, 2000);
//     })
// })

// butter.then((value)=>{
//     console.log(`Persone3: shows Ticket`);
//     console.log(value);
// })

// console.log("~Fourth Person Show Ticket");
// console.log("~Fifth Person Show Ticket");




// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================





/* 
console.log("~First Person Show Ticket");
console.log("~Second Person Show Ticket");

async function preMovie() {
    let promiseWifeBringingTicket = new Promise((res, rej) => {
        setTimeout(function () {
            res("Ticket");
        }, 3000);
    });
    
    let ticket = await promiseWifeBringingTicket;
    console.log("Wife Come With Ticket");
    console.log("Hasband: We should go in");
    console.log("wife: I Am hungry");
  console.log("Hasband: Wait...");

  let getPopcorn = new Promise((res, rej) => {
    setTimeout(function () {
      res("PopCorn");
    }, 2000);
});

let popcorn = await getPopcorn;
console.log("Hadband Come With " + popcorn);
console.log("Hasband: We should go in");
console.log("wife: I need butter on it");
console.log("Hasband: Wait...");

let getButter = new Promise((res, rej) => {
    setTimeout(function () {
        res("Butter");
    }, 2000);
});

let butter = await getButter;
console.log("Hadband Come With " + butter);
console.log("Hasband: We should go in");
console.log("Wife: Lets Go");
console.log("Hasband: I need Some Daru");

let getDaru=new Promise((res,rej)=>{
    setTimeout(function() {
        res("Ram")
    }, 1000);
})

let daru=await getDaru;
console.log("Hasband comes with "+daru);
console.log("Wife: Lets Go");

return ticket;
}

preMovie().then((m) => {
    console.log(`~They Show ${m} To Ticket Checker `);
});

console.log("~Fourth Person Show Ticket");
console.log("~Fifth Person Show Ticket");
*/




// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================


let allPost=[]
let userLastTimeActivity=Date.now()

async function mobileOn(){
    
    let createPost = function(post){
        return new Promise((res,rej)=>{
            setTimeout(function() {
                allPost.push(post)
                console.log("~Post Created >> "+ post);
                res()
            }, 2000);
        })
    }

    
    let updateActivity=new Promise((res,rej)=>{
        setTimeout(function() {
            userLastTimeActivity=Date.now()
            res()
        }, 1000);
    })
    
    await Promise.all([createPost("Post1"),updateActivity])
    await Promise.all([createPost("Post2"),updateActivity])
    
    
    function printPost(){
        return new Promise((res,rej)=>{
            setTimeout(function() {
                console.log('---------------------------');
                allPost.forEach((val)=>{
                    console.log(val);
                })
                console.log('---------------------------');
                res()
            }, 2000);
        })
    }

    await printPost()


    let deleteLastPost=()=>{
        return new Promise((res,rej)=>{
            setTimeout(function() {
                if(allPost.length>0){
    
                    let deletedPost=allPost.pop()
                    res('Deleted >>>>>>>> '+deletedPost)
                }
                rej("Nothing To Delete")
    
            }, 2000);
        })
    }

  
    let deletedPost=await deleteLastPost()
    console.log(deletedPost);

    await printPost()
    
    deletedPost=await deleteLastPost()
    console.log(deletedPost);
    


    try {
        deletedPost=await deleteLastPost()
        console.log(deletedPost);
    } catch (error) {
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log(error);
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    }
 

}

mobileOn()







































