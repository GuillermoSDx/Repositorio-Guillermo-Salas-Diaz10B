// var url ='https://jsonplaceholder.typicode.com/posts';

// fetch(url).then(response => response.json())
// .then(response => {
//     response.forEach(element => {
//         console.log("ID: " + element.id + ' -- Title:'+
//         element.title);
        
//     });
// })

var url ='https://jsonplaceholder.typicode.com/albums';
fetch(url).then(response => response.json())
.then(response => {
    response.forEach(element => {
        const { id, title, userId } = element;
        console.log(`ID: ${id} -- Title: ${title} -- UserId: ${userId}`);
    });
})