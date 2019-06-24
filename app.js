// First approach with prototype and XMLHttpRequest func and callback function
const http = new easyHttp();

//get list
http.get('https://jsonplaceholder.typicode.com/posts', 
    function(err,response){
        console.log('get list data');
        if(err === null){
            console.log("'response from app.js", JSON.parse(response));
            return function(){
                const data = JSON.parse(response)
                console.log("something here from response", data[0]);
                
            }();
        }
        else    
            console.log('response from app.js Error',err);
    }
); 

//get single data
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
    
// console.log('get data');

//     if(err === null)
//         console.log(response);
//     else    
//         console.log('response from app.js Error',err);
// }); 


const data = {title:'Custom post',body:'custom post body'};
// //POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     console.log('post data');  
//     if(err === null)
//         console.log(post);
//     else    
//         console.log('Error',err);
// });

//Update PUT
// http.put('https://jsonplaceholder.typicode.com/posts/3', data, function(err, post){
//     console.log('PUT data');  
//     if(err === null)
//         console.log(post);
//     else    
//         console.log('Error',err);
// }); 

//delete DELETE
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
//     console.log('delete data');
//     if(err === null)
//         console.log('post deleted', response);
//     else    
//         console.log('response from app.js Error',err);
// });