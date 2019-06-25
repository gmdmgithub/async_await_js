/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Dom Mika
 * @license MIT
 * 
 */
//the same when you return data - Promise
class EasyHTTP {

    //make GET
    async get(url) {
        const resp = await fetch(url);
        const resData = await resp.json();
        return resData;
    }

    //make POST
    async post(url, data) {

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await resp.json();
        return resData;
    }
}