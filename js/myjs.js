const books = [
    { no: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565" },
    { no: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084" },
    { no: 3, title: "Codingtyuiojpivghfhjbiojhvgjvhhg", author: "George Orwell", isbn: "9780451524935" }
];

function filterdBooks(title) {
const filteredBooks = books.filter(book => book.title=== title);    
    displayBooks(filteredBooks);
}




function displayBooks(filteredBooks) {
    const tbody = document.getElementById('booklist').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear previous rows
    filteredBooks.forEach(book => {
    const row = tbody.insertRow();
    row.innerHTML = `  
                <td>${book.no}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
            `;
});
}
displayBooks(books);