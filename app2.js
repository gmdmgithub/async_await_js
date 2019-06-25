const http = new EasyHTTP;

//get users
http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// POST data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@doe.com'
};

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));