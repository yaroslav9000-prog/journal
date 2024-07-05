import "./Books.css";
import { Book } from "../../../Models/books";
import {useState, useEffect} from "react";
function Books(): JSX.Element {
    const [books, setBooks] = useState<Book[]>([]);
    
    
    useEffect(()=>{
        const getBooks = async ()=>{
            const response = await fetch("http://localhost:3500/api/books");
            const data = await response.json();
            console.log(data);
            setBooks(data.map((item: {bookID: number; title: string; pages: number; price: number; authorID: number;})=>{
                return new Book(item.bookID, item.title, item.pages, item.price, item.authorID);
            }))
        }
        getBooks();

    },[])




    return (
        <div className="Books">	
            {books?
            books.map((item: Book)=>(<div><h3>{item.title}</h3><h3>{item.pages}</h3><h3>{item.price}</h3></div>))
            :<h1>books</h1>}
        </div>
    );
}

export default Books;
