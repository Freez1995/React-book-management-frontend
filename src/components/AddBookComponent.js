import React, {useState} from 'react';
import BookService from '../services/BookService';
import {Link, useNavigate} from 'react-router-dom';

const AddBookComponent = () => {

    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [bookNameErrorMessages, setBookNameErrorMessages] = useState("");
    const [authorNameErrorMessages, setAuthorNameErrorMessages] = useState("");
    const styleObj = {
        fontSize: 14,
        color: 'red',
        marginBottom:10
    }
    const navigate = useNavigate();

    const saveBook = (e) => {
        e.preventDefault();
        const book = {bookName, authorName}
    
        BookService.createBook(book).then((response) => {
            // console.log(response.data.errorMessages)
            if(response.data.status === "OK"){
                navigate('/books')
            }else{
                setBookNameErrorMessages("")
                setAuthorNameErrorMessages("")
                for (const errorMessage of response.data.errorMessages) {
                    if(errorMessage.includes("author")){
                        setAuthorNameErrorMessages(errorMessage)
                    }
                    else if(errorMessage.includes("book")){
                        setBookNameErrorMessages(errorMessage)
                    }
                }               
            }  
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'> Add Book</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form group mb-2'>
                                    <label className='form-label'>Book Name :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Book Name'
                                        name= "bookName"
                                        className='form-control'
                                        value={bookName}
                                        onChange={(e) => setBookName(e.target.value)}                                    
                                    >
                                    </input>
                                </div>
                                {bookNameErrorMessages && <div style={styleObj}>{bookNameErrorMessages}</div>}
                                <div className='form group mb-2'>
                                    <label className='form-label'>Author Name :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Author Name'
                                        name= "authorName"
                                        className='form-control'
                                        value={authorName}
                                        onChange={(e) => setAuthorName(e.target.value)}                                    
                                    >
                                    </input>
                                </div>
                                {authorNameErrorMessages && <div style={styleObj}>{authorNameErrorMessages}</div>}
                                <button className='btn btn-success' onClick={(e) => saveBook(e)}>Submit</button>
                                <Link to="/books" className='btn btn-danger ms-2'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default AddBookComponent;
