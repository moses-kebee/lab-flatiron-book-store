const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
        }
    ]
}

// DOM Manipulation Code
document.addEventListener("DOMContentLoaded", () => {
    
    // Step 1: Change the header
    const bookStoreTitle = document.getElementById("header");
    bookStoreTitle.textContent = bookStore.name;
    
    // Step 2: Get the book list container
    const bookList = document.getElementById("book-list");
    
    // Clear the example book (optional - remove if you want to keep it)
    // This removes the example book so we can add our dynamic ones
    const exampleBook = document.getElementById("delete-this");
    if (exampleBook) {
        exampleBook.remove();
    }
    
    // Step 3: Loop through books and create elements
    for (let i = 0; i < bookStore.books.length; i++) {
        const book = bookStore.books[i];
        
        // Create li element (book container)
        const bookContainer = document.createElement("li");
        bookContainer.className = "book-container";
        
        // Create h3 element (book title)
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;
        
        // Create p element (book author)
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `by ${book.author}`;
        
        // Create img element (book image)
        const bookImage = document.createElement("img");
        bookImage.src = book.imageUrl;
        bookImage.alt = `Cover of ${book.title}`;
        
        // Append all elements to the book container
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookImage);
        
        // Append the book container to the book list
        bookList.appendChild(bookContainer);
    }
});