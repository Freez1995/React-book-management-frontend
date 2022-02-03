import './App.css';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookComponent from './components/ListBookComponent';
import AddBookComponent from './components/AddBookComponent';
import UpdateBookComponent from './components/UpdateBookComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<ListBookComponent/>}/>
              <Route path="/books" element={<ListBookComponent/>}/>
              <Route path="/add-book" element={<AddBookComponent/>}/>
              <Route path="/update-book/:id" element={<UpdateBookComponent/>}/>
            </Routes>
          </div>
        <FooterComponent/>  
      </Router>
    </div>
  );
}

export default App;
