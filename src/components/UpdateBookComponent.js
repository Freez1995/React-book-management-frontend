import React, {useEffect, useState} from 'react';
import BookService from '../services/BookService';
import {Link, useNavigate, useParams} from 'react-router-dom';

const UpdateBookComponent = () => {

    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const UpdateBook = (e) => {
        e.preventDefault();
        const updateBook = {id, bookName, authorName}

        BookService.updateBook(updateBook).then((response) =>{
            navigate('/books')
        }).catch(error => {
            console.log(error);
        })
        
    }

    useEffect(() => {
        BookService.getBookById(id).then((response) => {
            setBookName(response.data.bookName);
            setAuthorName(response.data.authorName);
        }).catch(error => {
            console.log(error)
        })
    },[]);

    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'> Update Book</h2>
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
                                <button className='btn btn-success' onClick={(e) => UpdateBook(e)}>Submit</button>
                                <Link to="/books" className='btn btn-danger ms-2'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default UpdateBookComponent;