// api base url
const baseUrl = 'http://fakerestapi.azurewebsites.net';

/**
 * viewBook(id) returns a single Book
 * based on the id argument
 */
const viewBook = (bookId) => {
  let book = {};
  let status = true;
  fetch(`${baseUrl}/api/Books/${bookId}`, { method: 'GET' })
      .then(response => response.json())
      .then((data) => {
      	const bookResponse = data;
        book.Id = bookResponse.ID;
        book.Title = bookResponse.Title;
        book.Description = bookResponse.Description;
        book.PageCount = bookResponse.PageCount;
        book.Excerpt = bookResponse.Excerpt;
        book.PublishDate = bookResponse.PublishDate;
      })
      .catch((err) => {
        status = false;
      });
  fetch(`${baseUrl}/api/coverPhotos/${bookId}`, { method: 'GET' })
      .then(response => response.json())
      .then((data) => {
          const coverPhoto = data;
          book.Url = coverPhoto.Url;
      }).catch((err) => {
          status = false;
      });
    /**
     * return a book of a false boolean value
     * based on the status boolean value
     */
  if (status) {
      return book;
  } else {
      return false;
  }
};

/**
 * removeBookAuthor(id) deletes a single book author and returns
 * based on the id argument
 */
const removeBookAuthor = (bookAuthorId) => {
  fetch(`${baseUrl}/api/Authors/${bookAuthorId}`, { method: 'DELETE' })
      .then(response => response).then(data => true).catch(err => false);
};

export { viewBook, removeBookAuthor };

viewBook(2);