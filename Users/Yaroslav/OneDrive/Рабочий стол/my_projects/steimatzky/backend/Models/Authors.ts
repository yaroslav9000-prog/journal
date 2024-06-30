export class Author{
    public authorID: number;
    public fname: string;
    public lname: string;
    constructor(authorID: number, fname: string, lname: string){
        this.authorID = authorID;
        this.fname = fname;
        this.lname = lname;
    }
}