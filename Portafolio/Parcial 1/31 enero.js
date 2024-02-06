const axios = require('axios');

var url ='https://jsonplaceholder.typicode.com/users';

// axios.get(url).then(response => {
//     response.data.forEach(element => {
//         const { username } = element;
//         console.log(`username: ${username}`);
//     });
// })

axios.post(url,{
    username:"Foo Bar",
    email: "foo@bar.com"
}).then(response => console.log(response.data))