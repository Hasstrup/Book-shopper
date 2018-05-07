
const apiBase = 'http://fakerestapi.azurewebsites.net/';
const booksDiv = document.getElementById('books');

const getBooks = () => {
	fetch(apiBase + 'api/Books', {
		method: 'GET'
	}).then((res) => res.json()).then((response) => {
		let cards = '';
		response.forEach((book) => {
			cards += '<div class="col-sm-3"><div class="card" style="margin-top: 10px"><div class="card-body"><h3 class="card-subtitle mb-2 text-muted">'+book.Title+'</h3><p class="card-text">'+chopString(book.Description)+'</p><div class="col-sm-12 pull-right"><a href="#" onclick="showModal('+book.ID+')" class="btn btn-dark" style="float: right;">More</a></div></div></div></div>';
		});
		booksDiv.innerHTML = cards;
	});
}

getBooks();


function chopString(str){
	return str.slice(0, 100).trim() + '...';
}


function showModal(ID){
	console.log(ID);
}


