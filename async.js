// function myFunc(){
//     return 'hello'
// }

// console.log(myFunc());

//just adding async cause function return promise
async function myFunc(){
   // return 'hello';

    const promise = new Promise((resolve)=>{
        setTimeout(()=>resolve('Hello from promise!'),2000);
    });
    const rand = Math.floor((Math.random() * 10) + 1);
    const error = rand < 5; //fabricated error situation

    if(!error){
        const res = await promise; //wait for the promise
        return res;
    }else{
        await Promise.reject(new Error('Something went wrong!'));
    }

}

myFunc()
.then(res => console.log(res))
.catch(err =>console.error(err));


//best to use async/await with fatch

async function getUsers(){
    console.log('get users');
    
    //await for response and fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('got response');
    //go farther when proceeded
    const data = await response.json();
    
    console.log('data proceeded - json object from response');

    return data;
}

getUsers()
.then(data =>console.log("Users form jsonplaceholder", data))
.catch(e => console.log(e));
