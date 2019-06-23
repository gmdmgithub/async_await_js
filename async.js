// function myFunc(){
//     return 'hello'
// }

// console.log(myFunc());

//just adding async cause function return promise
async function myFunc(){
   // return 'hello';

    const promise = new Promise((resolve)=>{
        setTimeout(()=>resolve('Hello'),1000);
    });

    const error = false; //fabricated error situation

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
    
    //await for response and fatch
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //go farther when proceded
    const data = await response.json();

    return data;
}

getUsers().then(data =>console.log(data));
