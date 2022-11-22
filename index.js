getData()

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
        .then((data) => console.log(data.filter(item => item['userId'] === 1)))
}
