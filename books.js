class Book {

  constructor (title,author,  pages)
    {
      this.title = title;
      this.author = author;
      this.pages = pages;
  }
  displayInfo () {
    console.log(`${this.title}, автор: ${this.author} , ${this.pages} страниц`);
  }
}