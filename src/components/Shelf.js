
import Book from "./Book";
import React from 'react';
import PropTypes from 'prop-types';

const Shelf = ({ shelf, books, onChange }) => {
    const shelfBooks = books.filter(e => e.shelf === shelf.value);
    return (
        shelfBooks.length > 0
        &&
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.text}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        shelfBooks.map(e =>
                            <li key={e.id}><Book key={e.id} bookInfo={e} onChange={onChange} /></li>
                        )
                    }
                </ol>
            </div>
        </div>
    )
};

Shelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Shelf;
