function succ(){
    console.log("Success!")
}

function err(){
    console.log("Error")
}

let promise = new Promise((success, error) => {
    for (let i = 0; i < 10; i++){
        console.log(`Operation ${i}`)
    }
    success()
    error()
})

// function some(){
//     promise
//         .then(x => succ())
//         .catch(x => err())
// }

async function some(){
    await promise
    console.log("Success!")
}
