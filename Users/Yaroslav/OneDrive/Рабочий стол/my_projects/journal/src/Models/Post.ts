export class PostClass{
    public id: number;
    public title: string;
    public body: string;
    public date: string;
    constructor(id: number, title: string, body: string, date: string){
        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
    }
}