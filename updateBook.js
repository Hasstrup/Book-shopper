const updateBook = (book) => {
  const baseUrl = 'http://fakerestapi.azurewebsites.net/';
  const options = {
    method: 'PUT',
    body: JSON.stringify(book),
    mode: 'cors',
  };

  fetch(`${baseUrl}/api/books`, options)
    .then((response) => {
      console.log(response.json());
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', () => {
  const book = {};
  const updateForm = document.getElementById('updateForm');
  book.title = updateForm.title.value;
  book.description = updateForm.description.value;
  book.excerpt = updateForm.excerpt.value;

  updateBook(book);
});
