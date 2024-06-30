export class Book{
    public bookID: number;
    public title: string;
    public pages: number;
    public price: number;
    public authorID: number; // foreign key
    constructor(bookID: number, title: string, pages: number, price: number, authorID: number){
        this.bookID = bookID;
        this.title = title;
        this.pages = pages;
        this.price = price;
        this.authorID = authorID;
    }
}