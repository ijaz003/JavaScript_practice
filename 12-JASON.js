const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    function PostData() {
        let name = document.getElementById('name').value;
        let userName = document.getElementById('username').value;
        let userId = document.getElementById('user-id').value;

        const postData = {
            title: name,
            body: userName,
            id:userId
        };

        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }