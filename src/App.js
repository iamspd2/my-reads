import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import BooksList from './Components/BooksList';
import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={BooksList} />
        <Route path="/search" component={SearchPage}/>
      </div>
    );
  }
}

export default BooksApp