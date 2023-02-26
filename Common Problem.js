//todo  How to do a,b,c,d,e
/*
console.log('a');
console.log('b');

let a=new Promise((res,rej)=>{
    setTimeout(function() {
        console.log("c");
        res()
    }, 1000);
})

let b=a.then(()=>{
    return new Promise((res,rej)=>{
        setTimeout(function() {
            console.log('d');
            res()
        }, 0);
    })
})

b.then(()=>{
    console.log('e');
})
*/

//? ===================================================
//? ===================================================
//? ===================================================
//? ===================================================
//? ===================================================

//! It will not work
//! await is only works with promises
/*
async function printABCDE(){
    
    
    console.log('a');
    console.log('b');

   await setTimeout(function() {
        console.log('c');
    }, 1000);

    setTimeout(function() {
        console.log('d');
    }, 0);

    console.log('e');

}
printABCDE()
*/

//? ===================================================
//? ===================================================
//? ===================================================
//? ===================================================
//? ===================================================

async function printABCDE() {
    console.log("a");
    console.log("b");

    //   try {
    //     let c = await new Promise((res, rej) => {
    //       setTimeout(function () {
    //         rej("c");
    //       }, 1000);
    //     });
    //     console.log(c);
    //   } catch (e) {
    //     console.log("Error");
    //   }


    // ?Also Work With .then .then

    // function abc() {
    //     return new Promise((res, rej) => {
    //         setTimeout(function () {
    //             rej("c");
    //         }, 1000);
    //     });
    // }

    // await abc().then((val)=>{
    //     console.log(val);
    // }).catch((e)=>{
    //     console.log(e);
    // })



    await new Promise((res, rej) => {
        setTimeout(function () {
            console.log("d");
            res();
        }, 0);
    });

    console.log("e");
}
printABCDE();
