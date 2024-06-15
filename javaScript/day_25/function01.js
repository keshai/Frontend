const name = 'keshav'

function userMessage(name = 'Ram'){
    if(!name){
        console.log('please, enter a name')
        return
    }
    return `Hello ${name}, You just logged in`
}

console.log(userMessage())