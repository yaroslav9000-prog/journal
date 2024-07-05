import "./addBook.css";
import {useState} from "react";
import {FormSubmitHandler, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
type formValues = {
    title: string
    pages: number
    price: number
    authorID: number
}

function AddBook(): JSX.Element {
    const {register, handleSubmit, reset, formState :{ errors}} = useForm<formValues>();

    const onSubmit = async (data: formValues)=>{
        try{
            axios.post("http://localhost:3500/api/books/add", data);
        }catch(errors){
            console.log(errors);
        }
    };
    const onError = () =>{
        console.log(errors);
    }
    return (
        <div className="addBook">
            <h2>Add Book</h2>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
                <label>Title</label><br />
                <input type="text" placeholder="title" {...register("title", {required: true, minLength: 10})} id="title"/><br/>
                {/* {errors.title && <p>{errors.title.message}</p>} */}
                <label >Pages number</label><br />
                <input type="number" placeholder="pages" {...register("pages",{required:true})} id="pages"/><br/>
                <label >Book Price</label><br />
                <input type="number" placeholder="price" {...register("price", {required: true})} id="price"/><br/>
                <label >Author ID</label><br />
                <input type="number" placeholder="author id" {...register("authorID", {required: true})} id="authorID"/><br/>
                <input type="submit" value={"submit"} style={{marginLeft:"auto", marginRight:"auto"}}/>
            </form>
        </div>
    );
}

export default AddBook;
