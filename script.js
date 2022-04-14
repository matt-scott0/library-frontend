let library = [];

function Book(title, author, num_pages, read) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
}

function addBookToLibrary(Book) {
    library.push(Book);
}

function renderLibrary(library) {
    libraryDOM1 = document.querySelector('.library');
    libraryDOM1.innerHTML = '';
    for(let i = 0; i < library.length; i++) {
        let libraryDOM = document.querySelector(".library");
        let cardElement = document.createElement("div");
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h2');
        let bookPages = document.createElement('h2');
        let bookRead = document.createElement('button');
        let bookDeleteBtn = document.createElement('button');
        if(library[i].read) {
            bookRead.classList = "button read-btn read-btn-true";
            bookRead.textContent = "read";
        } else {
            bookRead.classList = "button read-btn read-btn-false";
            bookRead.textContent = "not read";
        }
        bookTitle.textContent = `"${library[i].title}"`;
        bookAuthor.textContent = 'By ' + library[i].author;
        bookPages.textContent = library[i].num_pages + ' pages';
        cardElement.className = 'card';
        bookDeleteBtn.classList = "button delete-book-btn";
        bookDeleteBtn.textContent = "remove book";

        cardElement.appendChild(bookTitle);
        cardElement.appendChild(bookAuthor);
        cardElement.appendChild(bookPages);
        cardElement.appendChild(bookRead);
        cardElement.appendChild(bookDeleteBtn);
        libraryDOM.appendChild(cardElement);
    }
}

let the_hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 296, false);
let narnia = new Book('Narnia', 'C. S. Lewis', 482, true);
let textbook = new Book('DS&A', 'Matt Scott', 2682, true);
addBookToLibrary(the_hobbit);
addBookToLibrary(narnia);
addBookToLibrary(textbook);

renderLibrary(library);

document.querySelector('.add-book-btn').onclick = () => {
    let overlay = document.querySelector('.overlay');
    overlay.style['display'] = 'flex';
    overlay.style['align-items'] = 'center';
    overlay.style['justify-content'] = 'center';
    console.log("brothers");
    return;
}

document.querySelector('.submit-add-book').onclick = () => {

    var formElement = document.forms['add-book-form'];
    var formData = new FormData(formElement);
    var bookName = formData.get('book-name');
    var authorName = formData.get('author-name');
    var numPages = formData.get('num-pages');
    var read = formData.get('yes_no');
    console.log(bookName);
    addBookToLibrary(bookName, authorName, numPages, read);
    renderLibrary(library);
    

    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    return;
}

let deleteButtonsArray = document.querySelectorAll('.delete-book-btn');
for(let i = 0; i < deleteButtonsArray.length; i++) {
    deleteButtonsArray[i].onclick = (e) => {
        e.currentTarget.parentNode.remove();
    }
}