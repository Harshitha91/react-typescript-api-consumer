import React from 'react';
import { useLocation } from 'react-router-dom';
import IBookData from '../types/BookDetailScreen';

const BookDetail: React.FC = () => {
  const location = useLocation();
  const book = location.state as IBookData;

  return (
    <div className="detail-page">
      <div className="col l6 padding-large">
        <h1 className="center">{book?.title}</h1>

        <h4 id="authors">Authors</h4>
        {book?.authors.length > 0 &&
          book?.authors.map(author => {
            return <p className="text-grey">{author.name}</p>;
          })}

        <h4 id="download_count">Download Count</h4>
        <p className="text-grey">{book?.download_count}</p>

        <h4 id="bookshelves">Bookshelves</h4>
        <p>
          {book?.bookshelves.length > 0 &&
            book.bookshelves.map(bookshelve => {
              return (
                <>
                  <span className="tag light-grey small margin-bottom">
                    {bookshelve}
                  </span>{' '}
                </>
              );
            })}
        </p>
        <br />

        <h4 id="subjects">Subjects</h4>
        {book?.subjects.length > 0 &&
          book.subjects.map(subject => {
            return <p className="text-grey">{subject}</p>;
          })}
        <br />
      </div>

      <div className="col l6 padding-large">
        <img
          src={book?.formats['image/jpeg']}
          className="round image opacity-min"
          alt="Menu"
        />
      </div>
    </div>
  );
};

export default BookDetail;
