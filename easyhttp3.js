/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Dom Mika
 * @license MIT
 * 
 */


// class EasyHTTP {

//     //make GET
//     get(url) {
//         fetch(url)
//         .then(res => res.json())
//         .then(data =>console.log(data))
//         .catch(err =>console.log(err));
//     }
// }

//thse same when you return data - Promise
class EasyHTTP {

    //make GET
    async get(url) {
       const resp = await fetch(url);
       const resData = await resp.json();
       return resData;

        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err));
        // });
    }

    //make POST
    async post(url,data) {
        
        const resp = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await resp.json();
        return resData;
        // return new Promise((resolve, reject) => {
        //     fetch(url,{
        //         method:'POST',
        //         headers:{
        //             'Content-type':'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //         .then(res => res.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err));
        // });
    }
}