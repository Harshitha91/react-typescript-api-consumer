import React from 'react';
import { useLocation } from 'react-router-dom';
import IBookData from '../types/BookDetailScreen';

const BookDetail: React.FC = () => {
  const location = useLocation();
  const book = location.state as IBookData;

  return (
    <div className="">
      <h1 className="book-title">{book?.title}</h1>
      <div className="detail-page">
      <div className="detail-section left">
          <img
            src={book?.formats['image/jpeg']}
            className=""
            alt="Menu"
          />
        </div>
        <div className="detail-section right">
          <div className="item">
          <h3 id="authors">Authors</h3>
          {book?.authors.length > 0 &&
            book?.authors.map(author => {
              return <p>{author.name}</p>;
            })}
          </div>
          <div className="item">
          <h3 id="download_count">Download Count</h3>
          <p>{book?.download_count}</p>
          </div>
          <div className="item">
          <h3 id="bookshelves">Bookshelves</h3>
          <p>
            {book?.bookshelves.length > 0 &&
              book.bookshelves.map(bookshelve => {
                return (
                  <>
                    <span className="tag">
                      {bookshelve}
                    </span>
                  </>
                );
              })}
          </p>
          </div>
          <div className="item">
          <h3 id="subjects">Subjects</h3>
          {book?.subjects.length > 0 &&
            book.subjects.map(subject => {
              return <p>{subject}</p>;
            })}
            </div>
        </div>

        
      </div>
    </div>
  );
};

export default BookDetail;
