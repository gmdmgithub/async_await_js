const http = new EasyHTTP;

//get user
// http.get('https://jsonplaceholder.typicode.com/posts');

// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

const data = {name:'John Doe',username:'johndoe', email:'john@doe.com'};

http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data=>console.log(data))
.catch(err=>console.log(err));