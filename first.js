function addFavouriteBook(bookName) {
    var FavouriteBooks = ['Samarcande', 'fou de Roi', '1984'];
    console.log(FavouriteBooks);
    var bookList = FavouriteBooks.includes('Great');
    if (bookList !== true) {
        FavouriteBooks.push('Great');
        console.log(FavouriteBooks);
    }

    function printBooks() {
        var num = FavouriteBooks.length;
        console.log('livres' + ' ' + 'est favoris : ' + num);
        for (let livre of FavouriteBooks)
            console.log(livre);
    }
    printBooks();
}

addFavouriteBook();