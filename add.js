const closeBtn = document.getElementsByClassName('close')[0];
const modal = document.getElementById('notif-modal');
const content = document.getElementById('ml-content');

const addBook = (book) => {

    fetch('http://fakerestapi.azurewebsites.net/api/books', {
        body: JSON.stringify(book),
        method:'POST',
        mode:'cors'
    })
    .then(response => {
        return response.json()
    })
    

};
const updateContent = (success) => {

    if(success) {
        modal.style.display = 'block';
        content.innerHTML = 'Book Added successfully';
    }

    else{
        modal.style.backgroundColor = 'red';
        content.innerHTML = 'Failed to add book';

    }

};
updateContent(true);
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

