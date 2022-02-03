import axios from "axios";

const BOOK_BASE_REST_API_URL = "http://localhost:8080/books"
const BOOK_BASE_REST_API_URL_UPDATE = "http://localhost:8080/book/update"


class BookService{

    getAllBooks(){
        return axios.get(BOOK_BASE_REST_API_URL);
    }

    createBook(book){
        return axios.post(BOOK_BASE_REST_API_URL, book);
    }

    getBookById(bookId){
        return axios.get(BOOK_BASE_REST_API_URL + '/' + bookId);
    }

    updateBook(updateBook){
        return axios.put(BOOK_BASE_REST_API_URL_UPDATE + '/', updateBook);
    }

    deleteBook(bookId){
        return axios.delete(BOOK_BASE_REST_API_URL + '/' + bookId);
    }

}

export default new BookService();